import { useState } from 'react';
import './App.css'
import type { ProfileType } from './components/Profile';
import Profile from './components/Profile';

function App() {

  const [profiles , setProfiles] = useState<ProfileType[]>([]);
  const [showForm , setShowForm] = useState<boolean>(false);

  const [name , setName] = useState('');
  const addProfile = () => {
    const newProfile: ProfileType = {
      id : Date.now(),
      name : name,
      showInfo : false,
    }
    setProfiles(prev => [...prev , newProfile]);
    setName('');
    setShowForm(prev => !prev)
  }

  const showProfileInfo = (id : number) => {
    const updatedProfiles = profiles.map(el => {
      if(el.id === id){
        return {
          ...el,
          showInfo : !el.showInfo,
        }
      }
      return el;
    })

    setProfiles(updatedProfiles);

  } 
  const deleteProfile = (id : number) => {
    const updatedProfile = profiles.filter(el => el.id !== id);
    setProfiles(updatedProfile);
  }

  const moveUp = (id : number) => {
    const selectedProfileIndex = profiles.findIndex(el => el.id === id);
    if(selectedProfileIndex === 0) return;
    const prevProfile = profiles[selectedProfileIndex - 1];
    const currProfile = profiles[selectedProfileIndex];

    const updatedProfiles = profiles.map( (el,index) => {
      if(index === selectedProfileIndex - 1){
        return currProfile;
      }
      if(index === selectedProfileIndex){
        return prevProfile
      }
      return el;
    })

    setProfiles(updatedProfiles)
  }
  const moveDown = (id : number) => {
    const selectedProfileIndex = profiles.findIndex(el => el.id === id);
    if(selectedProfileIndex === (profiles.length - 1)) return;
    const nextProfile = profiles[selectedProfileIndex + 1];
    const currProfile = profiles[selectedProfileIndex];

    const updatedProfiles = profiles.map( (el,index) => {
      if(index === selectedProfileIndex){
        return nextProfile
      }
      if(index === selectedProfileIndex + 1){
        return currProfile;
      }
      return el;
    })

    setProfiles(updatedProfiles)
  }

  return <div>
    <button onClick={() => setShowForm(true)} >Add Profile</button>
    { showForm && 
      <div>
        <input onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>
        <button onClick={() => addProfile()}>Add</button>
      </div>
    }
    {
      profiles.length > 0 && (
        profiles.map((el) => (
            // This will produce index key bug
            // <Profile key={index} {...el} showProfileInfo={showProfileInfo} deleteProfile={deleteProfile} moveUp={moveUp} moveDown={moveDown}/>
            <Profile  key={el.id} {...el} showProfileInfo={showProfileInfo} deleteProfile={deleteProfile} moveUp={moveUp} moveDown={moveDown}/>
        ))
      )
    }
  </div>
}

export default App
