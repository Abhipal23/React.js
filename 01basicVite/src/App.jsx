

import Chai from "./chai"
// make componet's func name start with uppercase
function App() {
  const name = 'abhishek'
  // i wanted to inject varibale in it


  return (

    // <div>
    //     <h1>vite app</h1>
    //     <Chai/>
    // </div>
    

    // we can write more than one elememt (html) at once 

    // sol: make a div 

    // to over come all this div react give an element empty which is called fragment 
    <>
    <h1>vite app</h1>
         <Chai/>
         <p>hello user {name}</p>
                       {/* this known as evaluated expression */}
                          {/* final outcome after eulation */}
    </>
      
  )
}

export default App
