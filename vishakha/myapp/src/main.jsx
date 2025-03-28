import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CustomStyle from './set1/CustomStyle.jsx'
import EmployeeCard from './set1/EmployeeCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CustomStyle />
    <EmployeeCard/>
    
  </StrictMode>
)
