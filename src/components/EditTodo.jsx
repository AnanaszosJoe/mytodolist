import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { updateTodo } from '../utils';

export const EditTodo = ({open, setOpen, id, desc}) => {
    const [input, setInput]=useState(desc)

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    //console.log(input);
    //backend.fg
    updateTodo(id, input)
    handleClose()
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <DialogTitle>Módosítás</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            type="text"
            multiline
            maxRows={6}
            fullWidth
            variant="standard"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Mégse</Button>
          <Button onClick={handleSave}>Mentés</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}