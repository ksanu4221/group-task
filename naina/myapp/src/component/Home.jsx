import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Card from './Card'

const Home = () => {
  return (
<>
 <div className='header'>
    <Header/>
 </div>
 <div  className='outlet'>
    <Outlet/>
 </div>
 {/* <Card/> */}
</>

)
}

export default Home