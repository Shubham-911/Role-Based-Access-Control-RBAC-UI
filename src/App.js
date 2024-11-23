import React, { useState } from 'react';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import { mockApi } from './api/mockApi';

const App = () => {
  const [users, setUsers] = useState(mockApi.getUsers());
  const [roles, setRoles] = useState(mockApi.getRoles());

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <UserManagement users={users} setUsers={setUsers} roles={roles} />
      <RoleManagement roles={roles} setRoles={setRoles} />
    </div>
  );
};

export default App;
