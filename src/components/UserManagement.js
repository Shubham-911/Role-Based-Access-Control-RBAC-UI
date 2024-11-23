import React from 'react';

const UserManagement = ({ users, setUsers, roles }) => {
  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold">User Management</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => handleAddUser({ id: Date.now(), name: 'New User', role: roles[0].name })}
      >
        Add User
      </button>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center border-b py-2">
            <span>{user.name}</span>
            <span>{user.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
