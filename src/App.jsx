import './App.css'
import { useState, useEffect } from 'react';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const apiUsersUrl = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";
    fetch(apiUsersUrl)
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="users">
      <List users={users} onUserSelect={handleUserSelect} selectedUser={selectedUser} />
      {selectedUser ? <Details info={selectedUser} /> : null}
    </div>
  );
}

export default App;