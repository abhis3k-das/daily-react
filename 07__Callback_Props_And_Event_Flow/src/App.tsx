import { useState } from 'react';
import './App.css'
import UserList from './Components/UserList';
import UserDetails from './Components/UserDetails';
export type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: 'Abhisek', email: 'abhisek@example.com' },
  { id: 2, name: 'Kate', email: 'kate@example.com' },
  { id: 3, name: 'John', email: 'john@example.com' },
];

function App() {
const [selectedId, setSelectedId] = useState<number | null>(null);

const selectedUser = users.find((user) => user.id === selectedId) ?? null;
const handleUserSelect = (id: number) => {
  setSelectedId(id);
};
  return <div style={{border: "1px solid black", width:"100vw"}}>
    <UserList users={users} onSelect={handleUserSelect} />
    <UserDetails user={selectedUser} />
  </div>
}

export default App
