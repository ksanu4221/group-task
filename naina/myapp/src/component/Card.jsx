import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
const Card = () => {
     const[data,setdata]=useState([])
     const fetchdata=async()=>{
        try{
                        const res=   await axios.get("http://localhost:3000/products")
                         console.log(res.data)
                         setdata(res.data);
                         
        }
        catch(err){
            console.log(err)
        }
     }
     useEffect(()=>{
        fetchdata()
     },[])


  return (
    <>
    <div className='card-container'>
    {
       data.map((item)=>(
        <Link to={`product/${item.id}`}>
       <div className='card' key={item.id}>
         <h5>{item.name}</h5>
         <p>{item.price} INR</p>
         <p>{item.description}</p>
         {/* <Link to={`product/${item.id}`}>go to detail</Link> */}
         {/* <button onClick={Navigate('/product')}>go to detail</button> */}
       </div></Link>
       )
       )
    }</div>
    </>
  )
}

export default Card