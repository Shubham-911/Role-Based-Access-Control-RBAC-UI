import React from 'react';

const RoleManagement = ({ roles, setRoles }) => {
  const handleAddRole = (newRole) => {
    setRoles([...roles, newRole]);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Role Management</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => handleAddRole({ id: Date.now(), name: 'New Role' })}
      >
        Add Role
      </button>
      <ul className="mt-4">
        {roles.map((role) => (
          <li key={role.id} className="flex justify-between items-center border-b py-2">
            <span>{role.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
