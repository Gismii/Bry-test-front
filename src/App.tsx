import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import DeleteUserModal from './components/DeleteUserModal';
import EditUserForm from './components/EditUserModal';
import { getUsers, createUser, deleteUser, updateUser } from './services/api';
import { User } from './interfaces/types';  
const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [editUser, setEditUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const addUser = async (formData: FormData) => {
    try {
      await createUser(formData);
      fetchUsers();
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUser(userId);
      fetchUsers();
      setOpenDeleteModal(false);
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const handleUpdateUser = async (id: number, formData: FormData) => {
    try {
      await updateUser(id, formData);
      fetchUsers();
      setOpenEditModal(false);
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Bryy User Management
      </Typography>
      <UserForm addUser={addUser} />
      <UserList
        users={users}
        setSelectedUserId={setSelectedUserId}
        setOpenDeleteModal={setOpenDeleteModal}
        setOpenEditModal={setOpenEditModal}
        setEditUser={setEditUser}
      />
      <DeleteUserModal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
        deleteUser={handleDeleteUser}
        userId={selectedUserId}
      />
      <EditUserForm
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        user={editUser}
        updateUser={handleUpdateUser}
      />
    </Container>
  );
};

export default App;
