import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Modal } from '@mui/material';
import { User } from '../interfaces/types';  

interface EditUserFormProps {
  open: boolean;
  handleClose: () => void;
  user: User | null;
  updateUser: (id: number, formData: FormData) => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ open, handleClose, user, updateUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setImage(null);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      if (image) {
        formData.append('image', image);
      }
      updateUser(user.id, formData);
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        component="form"
        onSubmit={handleSubmit}
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
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          component="label"
          fullWidth
          sx={{ margin: 'normal' }}
        >
          Upload Image
          <input
            type="file"
            hidden
            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          />
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditUserForm;
