import { useState, useEffect } from 'react';
import './App.css';
import { Card } from './nurse1';
import { fetchUsers } from './services/userService';

export function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    }
    getUsers();
  }, []);

  return (
    <section className="App">
      {users.map(({id, firstName, lastName}) => (
        <Card key={id} number={id}>
          {`${firstName} ${lastName}`}
        
        </Card>
      ))}
    </section>
  );

  
}

// export function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function getUsers() {
//       const fetchedUsers = await fetchUsers();
//       setUsers(fetchedUsers);
//     }
//     getUsers();
//   }, []);

//   return (
//     <section className="App">
//       {users.map(({ codcama, pnombre, snombre, papellido, sapellido }) => (
//         <Card key={codcama} number={codcama}>
//           {`${pnombre} ${snombre} ${papellido} ${sapellido}`}
//         </Card>
//       ))}
//     </section>
//   );
// }
