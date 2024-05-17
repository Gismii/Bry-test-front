import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import DeleteUserModal from './components/DeleteUserModal';
import { getUsers, createUser, deleteUser } from './services/api';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  cpf: string;
  imageUrl: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

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

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <UserForm addUser={addUser} />
      <UserList users={users} setSelectedUserId={setSelectedUserId} setOpenDeleteModal={setOpenDeleteModal} />
      <DeleteUserModal
        open={openDeleteModal}
        handleClose={() => setOpenDeleteModal(false)}
        deleteUser={handleDeleteUser}
        userId={selectedUserId}
      />
    </Container>
  );
};

export default App;
