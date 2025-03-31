import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import Login from './component/Login'
import ProductDetails from './component/ProductDetails'
import Card from './component/Card'



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='/' element={<Card/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} /> 
      <Route path='/login' element={<Login/>} /> 
      <Route path='/product/:productId' element={<ProductDetails/>} /> '     
      </Route>   
    </Routes>
    </>
  )
}

export default App
