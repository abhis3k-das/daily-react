import type { User } from "../App";

type UserDetailsProps = {
    user : User | null
}
const UserDetails = ({user} : UserDetailsProps) => {
  return (
    <div style={{
        border : "1px solid black",
        width : "100%",
        textAlign : "center",
    }}>
        <h2>User Details</h2>
        {!user ? (
            <span> No User Selected </span>
        ) : (
            <div>
                <span>Name : {user.name}</span>
                <span>Email : {user.email}</span>
            </div>
        )}
    </div>
  )
}

export default UserDetails