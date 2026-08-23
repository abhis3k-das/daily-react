type ProfileCard = {
    name : string;
    role : string;
    experience : number;
}

const ProfileCard = ({name , role , experience} : ProfileCard) => {
  return (
    <article>
        <p>Name : {name}</p>
        <p>Role : {role}</p>
        <p>Experience : {experience} {experience === 1 ? 'Year' : 'Years'}</p>
    </article>
  )
}

export default ProfileCard