import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { addingNewTodo } from '../utils';
import { useState } from 'react';

export const AddNewTodo = () => {
    const [newTodo, setNewTodo] = useState('')
    console.log(newTodo);
    const handleAdd = () =>{
        addingNewTodo(newTodo)
        setNewTodo('')
    }

  return (
    <div className='addNewTodo'>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="Add new todo" variant="outlined" 
        value={newTodo}
        onChange={(event)=>setNewTodo(event.target.value)}/>
        </Box>
        <AddBoxIcon sx={{color:"green", cursor:"pointer", fontSize:"2.5rem"}}
        onClick={handleAdd}
        />
    </div>
  );
}
