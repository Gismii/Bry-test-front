import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

interface DeleteUserModalProps {
  open: boolean;
  handleClose: () => void;
  deleteUser: (userId: number) => void;
  userId: number | null;
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({ open, handleClose, deleteUser, userId }) => {
  const handleDelete = () => {
    if (userId !== null) {
      deleteUser(userId);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
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
          Are you sure you want to delete this user?
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="contained" color="secondary" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteUserModal;
