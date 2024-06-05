import { useState } from 'react'
import login from "./components/Login.jsx";

import UserContextProvider from './context/UserContextProvider.js'
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.js";



function App() {
  const [count, setCount] = useState(0)

  return (
    < >

        <UserContextProvider >
            <Login/>
            <Profile/>
        </UserContextProvider>
        
    
     
    </>
  )
}

export default App
