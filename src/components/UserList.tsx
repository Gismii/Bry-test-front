import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  cpf: string;
  imageUrl: string;
}

interface UserListProps {
  users: User[];
  setSelectedUserId: (id: number | null) => void;
  setOpenDeleteModal: (open: boolean) => void;
}

const UserList: React.FC<UserListProps> = ({ users, setSelectedUserId, setOpenDeleteModal }) => {
  const handleDeleteClick = (id: number) => {
    setSelectedUserId(id);
    setOpenDeleteModal(true);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>CPF</TableCell>
          <TableCell>Image</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.cpf}</TableCell>
            <TableCell>
              <img src={user.imageUrl} alt="User" width={50} height={50} />
            </TableCell>
            <TableCell>
              <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(user.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserList;
