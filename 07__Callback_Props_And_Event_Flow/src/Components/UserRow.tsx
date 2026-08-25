import type { User } from "../App";

type UserRowProp = {
    user : User,
    onSelect : (id : number) => void,
}

const UserRow = ({user , onSelect} : UserRowProp) => {
  return <li style={{border : "1px solid black", padding:"10px 20px" ,gap:"20px" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
        <div>{user.name}</div>
        <button onClick={() => onSelect(user.id)}>Select</button>
    </li>
}

export default UserRow