# Daily React

### How to create branch

```
git switch main
git pull
git switch -c [N]__Your_Project_Name <first_commit>
```

React projects completed as branches, with their corresponding Notion notes.

| # | Branch | Notion | Project description |
|---|---|---|---|
| 01 | [`01__Fresh_Vite_+_React_+_TypeScript_From_Scratch`](https://github.com/abhis3k-das/daily-react/tree/01__Fresh_Vite_%2B_React_%2B_TypeScript_From_Scratch) | [Fresh Vite + React + TypeScript From Scratch](https://app.notion.com/p/01-Fresh-Vite-React-TypeScript-From-Scratch-3c5498bf03a181bda571e4835956f323) | A clean React + TypeScript + Vite project built from an empty directory, covering project setup, a typed `ProfileCard`, npm scripts, linting, production builds, and previewing. |
| 02 | [`02__Project_Anatomy_And_npm_Scripts_Drill`](https://github.com/abhis3k-das/daily-react/tree/02__Project_Anatomy_And_npm_Scripts_Drill) | [Project Anatomy & npm Scripts Drill](https://app.notion.com/p/02-Project-Anatomy-npm-Scripts-Drill-3c5498bf03a1819ebb8dd445479495c6) | A project anatomy and npm scripts drill covering `src`, `public`, dependency files, the lockfile, build output, and a dedicated TypeScript type-checking script. |
| 03 | [`03__JSX_Expressions_Developer_Profile_Card`](https://github.com/abhis3k-das/daily-react/tree/03__JSX_Expressions_Developer_Profile_Card) | [JSX Expressions: Developer Profile Card](https://app.notion.com/p/3c5498bf03a181b28aa7f8a4c5d991a4) | A typed `DeveloperProfile` card that renders profile data with JSX expressions, `className`, pure rendering, and an availability label derived without duplicated state. |
| 04 | [`04__Conditional_Status_Badge`](https://github.com/abhis3k-das/daily-react/tree/04__Conditional_Status_Badge) | [Conditional Status Badge](https://app.notion.com/p/3c5498bf03a1814186b0f74104fc1d70) | A reusable typed status badge for `idle`, `loading`, `success`, and `error`, using a finite union, clear conditional rendering, an optional `compact` prop, and an explicit fix for the `count && <Badge />` zero-rendering bug. |
| 05 | [`05__Stable_Keys_And_Row_Identity_Bug_Lab`](https://github.com/abhis3k-das/daily-react/tree/05__Stable_Keys_And_Row_Identity_Bug_Lab) | [Stable Keys & Row Identity Bug Lab](https://app.notion.com/p/3c5498bf03a181b28d49cb3056d1f925) | A debugging lab that reproduces row state moving to the wrong item with index keys, then fixes list identity using stable domain IDs in a reorderable and deleteable row list. |
| 06 | [`06__Typed_Reusable_Button_API`](https://github.com/abhis3k-das/daily-react/commits/06__Typed_Reusable_Button_API) | [Typed Reusable Button API](https://app.notion.com/p/3c5498bf03a18142b0aaec3f7f042825) | A reusable typed Button API built with `ComponentProps<'button'>` to preserve native button props, add a required `tone`, support `loading`, default `type="button"`, and merge disabled, ARIA, class, and style behavior. |
| 07 | [`07__Callback_Props_And_Event_Flow`](https://github.com/abhis3k-das/daily-react/tree/07__Callback_Props_And_Event_Flow) | [Callback Props & Event Flow](https://app.notion.com/p/3c5498bf03a181ceb795fb123c17aac8) | A user directory exercise where `App` owns `selectedId`, passes users and an `onSelect` callback down through `UserList` and `UserRow`, and derives the selected user for `UserDetails` with stable ID-based state. |
| 08 | [`08__Composition_with_children_And_Slots`](https://github.com/abhis3k-das/daily-react/tree/08__Composition_with_children_And_Slots) | [Composition with children & Slots](https://app.notion.com/p/3c5498bf03a18185a247d4a73f7600b5) | A reusable composition exercise using `children` for primary content and explicit slot props for optional areas, keeping the component API flexible without hard-coding every layout variant. |
| 09 | [`09__Counter_with_History_And_Functional_Updates`](https://github.com/abhis3k-das/daily-react/tree/09__Counter_with_History_And_Functional_Updates) | [Counter with History & Functional Updates](https://app.notion.com/p/3c5498bf03a181ea99e7d61536964964) | A score counter exercise covering `+1`, `-1`, `+3`, reset behavior, functional state updates, non-negative count guards, and immutable history of accepted count changes. |
