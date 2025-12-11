import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeData from './assets/components/EmployeeData'
import EmployeeDisp from './assets/components/EmployeeDisp'

function App() {
  
  let [employees,setEmployess] = useState([])

   let recieveemployee = (employee) =>{
        setEmployess(prev => [employee,...prev])
        console.log("in main",employee)
   } 

   useEffect(()=>{
    fetch("http://localhost:3000/Showallemployees").
    then(res => res.json()).
    then(res =>{
      console.log(res)
      setEmployess(res)}).catch((err) =>{console.log("error",err)})

   }, [])
  return (
    <>
    <EmployeeData getdata ={recieveemployee} />
        {
          employees.map((employee,i) =>(
            <EmployeeDisp key={i}
                empid = {employee.empid}
                empname = {employee.empname}
                empdept = {employee.empdept}
            />
          ))
        }
    </>
  )
}

export default App
