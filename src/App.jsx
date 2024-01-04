import React, { useEffect, useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'

function App() {
  const [user, setUser]=useState(null)

  

  return (
   <div>
    <h1>My ToDo List</h1>
    <Todos/>
   </div>
  )
}

export default App
