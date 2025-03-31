import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {
   const{productId}=useParams()

   const[data,setdata]=useState({})
   const fetchdata=async()=>{
      try{
                      const res=   await axios.get("http://localhost:3000/products")
                    //    console.log(res.data)
                    //    setdata(res.data);
                 const filtereddata=    res.data.find((item)=>item.id===productId)
                 console.log(filtereddata)
                 setdata(filtereddata);
                 
                       
      }
      catch(err){
          console.log(err)
      }
   }
   useEffect(()=>{
      fetchdata()
   },[])

console.log(data);



  return (
    <>
    <div>
      <h3>Product details of {data.name}</h3>
      <div>name : {data.name}</div>
      <div>description : {data.description}</div>
      <div> price : {data.price}</div>
      <div> quantity :{data.quantity}</div>
      <Link to="/">Home page</Link>
      </div>
    </>
  )
}

export default ProductDetails