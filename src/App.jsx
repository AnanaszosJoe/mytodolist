import React, { useEffect, useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'
import { Login } from './components/Login'
import { getCurrentUser, signOutUser } from './utils'
import LogoutIcon from '@mui/icons-material/Logout';

function App() {
  const [user, setUser]=useState(null)
  getCurrentUser(setUser)

  console.log(user);

  

  return (
   <div className='app'>
    <h1>My ToDo List</h1>
    {user && <LogoutIcon
    sx={{width:"100%", cursor:"pointer", color:"red", fontSize:"2.5rem"}}
    onClick={()=>signOutUser()}
    />}
    {user==null ? <Login /> : <Todos/>}
   </div>
  )
}

export default App
