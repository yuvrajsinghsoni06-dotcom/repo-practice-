import { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  // Return the JSX directly here, don't wrap it in another function
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.username} - {user.email}
        </li>
      ))}
    </ul>
  );
};

// Export the main component
export default UserList;