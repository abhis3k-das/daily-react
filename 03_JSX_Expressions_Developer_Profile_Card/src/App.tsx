import './App.css'
import DeveloperProfile , {type DeveloperProfileType }  from './components/DeveloperProfile';


const Developers : DeveloperProfileType[] =[
  {
    id : 1,
    name : 'Profile-1',
    availability : true,
    role : 'Developer',
    skills : ['Skill-1' , 'Skill-2'],
    yearsOfExperience : 2,
  },
  {
    id:2,
    name : 'Profile-2',
    availability : false,
    role : 'Developer',
    skills : ['Skill-1' , 'Skill-2'],
    yearsOfExperience : 4,
  },
] 

function App() {

  return <main>
    <h1>Developer Profiles : </h1>
    {Developers.map((el:DeveloperProfileType) => {
      return <DeveloperProfile {...el} key={el.id} />
    })}
  </main>
}

export default App
