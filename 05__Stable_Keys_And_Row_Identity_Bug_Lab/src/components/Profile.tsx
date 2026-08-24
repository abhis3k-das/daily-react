import { useState } from "react";

export type ProfileType = {
    id : number;
    name : string;
    showInfo : boolean;
}
type ProfileProp = ProfileType & {
    showProfileInfo : (id : number) => void,
    deleteProfile : (id : number) => void,
    moveUp : (id : number) => void,
    moveDown : (id : number) => void
}

const Profile = ({name ,showInfo , id , deleteProfile ,showProfileInfo , moveUp , moveDown} : ProfileProp) => {
    const [draft , setDraft] = useState('');
    const [edit , setEdit] = useState(false);

    return <div style={{ border:'1px solid black', padding: '4px', margin: '5px'}} key={id}>
        <strong>{name}</strong>
        <button onClick={()=>showProfileInfo(id)}>Show Profile</button>
        <button onClick={()=>deleteProfile(id)}>Delete Profile</button>
        <button onClick={()=> setEdit(true)}>Add Note</button>
        <button onClick={()=> moveUp(id)}>Move Up</button>
        <button onClick={()=> moveDown(id)}>Move Down</button>
        {showInfo && <p>{draft.length > 0 ? draft : 'No notes.'}</p>}
        {edit && 
            <div>
                <input onChange={(e) => setDraft(e.target.value)} value={draft} placeholder="Enter note.."/>
                <button onClick={() => setEdit(prev => !prev)}>Save</button>
            </div>
        }
    </div>
}

export default Profile