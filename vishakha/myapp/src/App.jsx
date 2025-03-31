import { useState } from 'react'

import './App.css'
import EmployeeCard from './set1/EmployeeCard'
import CustomStyle from './set1/CustomStyle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <EmployeeCard name='john doe' designation='trainee' workExperience={5}></EmployeeCard>
      </div>



      <div>
        <CustomStyle 
        backgroundColor="lightgreen"
        color="darkgreen"
        borderRadius="5px"
        padding="10px"
        />
      </div>
    
     
    </>
  );
};

export default App;
