import { useState } from 'react'
import Button from "./components/Button.jsx";

import './App.css'


function App() {
    const [bgColor, setBgColor] = useState('#ffffff');
   const changeBgColor = (newBg)=>setBgColor(newBg);
  return (
      <>
          <div className="w-full h-screen duration-200" style={{backgroundColor: bgColor}}>

          </div>

          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2  '>

              <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 px=3 px-2 rounded-3xl'>
                   <Button  color="red" bgColor="red"  onClick={()=>changeBgColor("red")} />
                   <Button color="blue" bgColor="blue"   onClick={()=>changeBgColor("blue")}/>
                   <Button color="green " bgColor="green"   onClick={()=>changeBgColor("green")}/>

              </div>


          </div>


      </>
  )
}

export default App
