import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./Layout.jsx";
import {About, Home, Contact, LeetCode} from './components/index.js';
import User from './components/User/User.jsx';
import { leetCodeLoader } from './components/Leetcode/LeetCode.jsx';

//
// const router = createBrowserRouter([
//     {
//         path:'/',
//         // top level elemet
//         element:<Layout/>,
//         children:[
//             {
//                 path:'',
//                 element:<Home/>
//
//             },
//             {
//                 path:'about',
//                 // as '/' already defined
//                 element:<About/>
//
//             },
//             {
//                 path:'contact',
//
//                 element:<Contact/>
//
//             }
//         ]
//
//     }
// ])

// Another way for router

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
          {/* // outlet allows nesting  */}

               <Route path='' element={<Home/>}/>
               <Route path='about' element={<About/>}/>
               <Route path='contact' element={<Contact/>}/>
               <Route path='user/:id' element={<User/>}/>
                                    {/* automatically we get access to this componet  */}
                                 
               {/* <Route path='leetcode' element={<LeetCode/>}/>   apart from  these two propertoes
                  there is one more property which is loader 

                  loader :whenever we wanted to fetch data from api call/database 
                          we can make api call from here only 
                          when ever mouse cursor goes to  that befroe cliking it will start fetching data
                          (on that event) fetching start before useEffect  
                          and store in cache 
                            
               */
                 
                  
               }
               <Route loader={
                leetCodeLoader
               } path='leetcode' element={<LeetCode/>}/>

          </Route>

         


    )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      {/*as we inserted react router with ReactRouter so we need not to reder app*/}

    <RouterProvider router={router}/>
  </React.StrictMode>,
)
