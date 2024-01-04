import React, { useEffect, useState } from 'react'
import { readTodos } from '../utils'
import List from '@mui/material/List';
import { Todo } from './Todo';

export const Todos = () => {
    const [todos, setTodos] = useState(null)
    useEffect(()=>{
        readTodos(setTodos)
    },[])

    console.log(todos);
  return (
    <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos && todos.map(obj=><Todo key={obj.id} {...obj}/>)}
        </List>
    </div>
  )
}
