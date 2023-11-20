import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Api.css" 


export default function ApiTableau() {
    const [st1,setst1]=useState([])
    const [page,setpage]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos?_limite=10&_page=${page}`)
        .then(res=>setst1(res.data))
        .catch((error)=>console.log(error))
    },[page])
  


    const suivant=()=>{
     if(page<20){
        setpage(page+1)
    }
     }
     const precedent=()=>{
        if(page>1){
      setpage(page-1)
    }
     }
  return (
    
    <div className='txt'>
        <h1   >liste des element </h1>
      <ul>
       {st1.map((x)=>(
         <li>{x.title}</li>
       ))}
      </ul>

      <input type="button" className='btn btn-primary'  onClick={precedent} value="precedent"/>
      <input type="button" className='btn btn-primary btn-spacing' onClick={suivant} value="suivant"/>
     
    </div>
  )
}