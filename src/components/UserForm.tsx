import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface UserFormProps {
  addUser: (formData: FormData) => void;
}

const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('cpf', cpf);
    if (image) {
      formData.append('image', image);
    }
    addUser(formData);
    setFirstName('');
    setLastName('');
    setCpf('');
    setImage(null);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={4}>
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
      <TextField
        label="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        fullWidth
        margin="normal"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
      />
      <br /><br />
      <Button type="submit" variant="contained" color="primary">
        Add User
      </Button>
    </Box>
  );
};

export default UserForm;
