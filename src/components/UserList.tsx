import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  cpfHash: string;
  imageUrl: string;
}

interface UserListProps {
  users: User[];
  setSelectedUserId: (id: number | null) => void;
  setOpenDeleteModal: (open: boolean) => void;
  setOpenEditModal: (open: boolean) => void;
  setEditUser: (user: User | null) => void;
}

const UserList: React.FC<UserListProps> = ({ users, setSelectedUserId, setOpenDeleteModal, setOpenEditModal, setEditUser }) => {
  const handleDeleteClick = (id: number) => {
    setSelectedUserId(id);
    setOpenDeleteModal(true);
  };

  const handleEditClick = (user: User) => {
    setEditUser(user);
    setOpenEditModal(true);
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
            <TableCell>****{user.cpfHash.substring(0, 4)}</TableCell>
            <TableCell>
            
                <img src={user.imageUrl} alt="User" width={50} height={100} />
              
            </TableCell>

            <TableCell>
              <Button  color="primary" onClick={() => handleEditClick(user)}>
              <img width="30" height="30" src="https://img.icons8.com/ios/50/create-new.png" alt="create-new"/>
              </Button>

              <Button  color="secondary" onClick={() => handleDeleteClick(user.id)}>
              <img width="30" height="30" src="https://img.icons8.com/color/48/delete-forever.png" alt="delete-forever"/>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserList;
