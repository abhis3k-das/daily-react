import './DeveloperProfile.css'
export type DeveloperProfileType = {
    id : number,
    name : string;
    role : string;
    yearsOfExperience : number;
    skills : string[];
    availability : boolean;
}

const DeveloperProfile = ({name , role , yearsOfExperience , skills , availability} : DeveloperProfileType) => {
  return <article className="developer-profile">
    <h3>Name : {name}</h3>
    <p>Role : {role}</p>
    <p>Experience : {yearsOfExperience} {yearsOfExperience === 1 ? 'Year' : 'Years'}</p>
    <p>Skills : {skills.join(', ')}</p>
    <p>Available : {availability ? 'Yes' : 'No'}</p>
  </article>
}

export default DeveloperProfile