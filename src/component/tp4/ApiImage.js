import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Api.css" 


export default function ApiImage() {
    const [scrimg,setSrcimg]=useState('');
    useEffect(()=>{
      axios.get('https://api.thecatapi.com/v1/images/search').then(res=>{setSrcimg(res.data[0].url)}).catch(error=>{console.log(error)})
     },[])
  return (
    <div>
      <img className='img-chat' src={scrimg} alt=""/>
    </div>
  )
}
