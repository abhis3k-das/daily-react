#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: ./branch-creator.sh <project name>"
  echo
  echo "Examples:"
  echo "  ./branch-creator.sh 10__Effect_Synchronization"
  echo "  ./branch-creator.sh \"10 - Effect Synchronization\""
}

die() {
  echo "Error: $*" >&2
  exit 1
}

if [ "$#" -lt 1 ]; then
  usage
  exit 1
fi

raw_name="$*"
branch_name="$(
  printf '%s' "$raw_name" |
    sed -E \
      -e 's/^[[:space:]]+//' \
      -e 's/[[:space:]]+$//' \
      -e 's/[^A-Za-z0-9]+/_/g' \
      -e 's/_+/_/g' \
      -e 's/^_+//' \
      -e 's/_+$//' \
      -e 's/^([0-9][0-9])_/\1__/'
)"
package_name="$(
  printf '%s' "$branch_name" |
    tr '[:upper:]_' '[:lower:]-' |
    sed -E \
      -e 's/-+/-/g' \
      -e 's/^-+//' \
      -e 's/-+$//'
)"

[ -n "$branch_name" ] || die "project name must contain at least one letter or number"
[[ "$branch_name" != -* ]] || die "project name cannot start with '-'"
[ -n "$package_name" ] || die "could not create a valid npm package name"

repo_root="$(git rev-parse --show-toplevel 2>/dev/null)" ||
  die "run this script inside a git repository"

cd "$repo_root"

command -v npm >/dev/null ||
  die "npm was not found; install Node.js and npm first"

git check-ref-format --branch "$branch_name" >/dev/null ||
  die "'$branch_name' is not a valid git branch name"

if git show-ref --verify --quiet "refs/heads/$branch_name"; then
  die "branch '$branch_name' already exists"
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  die "commit or stash tracked changes before creating a new branch"
fi

base_commit="f45eea38b3cb9e0386167a384dd0eb13bd69dfb6"

echo "Project name: $branch_name"
echo "Switching to main..."
git switch main

echo "Updating main..."
git pull --ff-only

git merge-base --is-ancestor "$base_commit" main ||
  die "main does not contain the expected root commit $base_commit"

if [ -e "$branch_name" ]; then
  die "project directory '$branch_name' already exists on main"
fi

if [ "$package_name" != "$branch_name" ] && [ -e "$package_name" ]; then
  die "temporary scaffold directory '$package_name' already exists on main"
fi

echo "Creating branch..."
git switch -c "$branch_name" "$base_commit"

echo "Creating React + TypeScript project..."
npm create vite@latest "$package_name" -- --template react-ts

if [ "$package_name" != "$branch_name" ]; then
  mv -- "$package_name" "$branch_name"
fi

echo "Committing initial project..."
git add "$branch_name"
git commit -m "initialize React project"

echo "Created branch '$branch_name' from $base_commit and committed the React project."
