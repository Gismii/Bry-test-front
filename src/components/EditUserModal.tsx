import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import { User } from '../interfaces/types';
import { updateUser } from '../services/api';

interface EditUserModalProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
  fetchUsers: () => Promise<void>;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ open, onClose, user, fetchUsers }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);

  const handleUpdate = async () => {
    if (user) {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      if (image) {
        formData.append('image', image);
      }

      try {
        await updateUser(user.id, formData);
        fetchUsers();
        onClose();
      } catch (error) {
        console.error('Failed to update user:', error);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          p: 4,
          boxShadow: 24,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Edit User
        </Typography>
        <TextField
          fullWidth
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          margin="normal"
        />
        <input type="file" onChange={handleFileChange} />
        <Button variant="contained" color="primary" onClick={handleUpdate} style={{ marginTop: '10px' }}>
          Update
        </Button>
        <Button variant="contained" onClick={onClose} style={{ marginLeft: '10px', marginTop: '10px' }}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
