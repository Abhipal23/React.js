import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


export default function LeetCode() {

const data = useLoaderData();


  //const [data,setData]= useState([])  
//     useEffect(()=>{
//              fetch('https://leetcode-stats-api.herokuapp.com/abhipal23').then((res)=> res.json()).then((data)=>{
//                 setData(data)
//                  console.log(data);
//              }).catch((e)=>console.log(e))
//     },[]
// )
  return (
    <div className='text-center m-4 bg- bg-gray-600 text-white p-4 text-3xl'>
        <h1>Total Questions solved:{data ?data.totalSolved:null} </h1>
      
    </div>
  )
}

// i wnated api call when our component load 

// we can make this function outside also 

export  const  leetCodeLoader =async()=>{
    const response =  await fetch('https://leetcode-stats-api.herokuapp.com/abhipal23')
    // here response is basiclaly promise and we can retunr also 

    return response.json()

    // to refelect data we use a hook useLoaderData 
     
}