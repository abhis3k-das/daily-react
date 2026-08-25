import type { User } from "../App";
import UserRow from "./UserRow";

type UserListProps = {
    users : User[];
    onSelect : (id : number) => void;
}

const UserList = ({users , onSelect} : UserListProps) => {
  return <div style={{
        textAlign : "center",
        border : "1px solid black",
    }}>
        <h2>User List</h2>
        {
            users.length === 0 ? (
                <div> No Users </div>
            ) : (
                <ul style={{gap: "20px"}}>
                    {users.map(el => <UserRow key={el.id} user={el} onSelect={onSelect} />)}
                </ul>
            )
        }
  </div>
}

export default UserList