import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './assets/Components/ExpenseItem'
import NewExpense from './assets/Components/NewExpense'
import EmployeeData from './assets/Components/EmployeeData'
import Taskdata from './assets/Components/Taskdata'
import TaskManage from './assets/Components/TaskManage'
import WeatherDisp from './assets/Components/WeatherDisp'

function App() {
 var dummy_expenses = [
                {id : 1 , exptitle :"Amazon " , expdate : new Date(2020,5,1) , price: "9000"},
                {id : 2 , exptitle: "Myntra ", expdate:  new Date(2020,11,4),price:"8000"},
                {id : 3 , exptitle:"Reliance Digital ", expdate: new Date(2020,10,6) , price:"80000"}
  ]

  var empdetails =  [
                {empid : 1 , empname :"Amazon " ,  price: "9000"},
                {empid : 2 , empname: "Myntra ",price:"8000"},
                {empid : 3 , empname:"Reliance Digital ", price:"80000"}
  ]

  


  let [employees,setEmployee] = useState(empdetails)

  let [expenses,setExpenses] = useState(dummy_expenses)

  let [weather,setWeather] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/weather").
    then(res => res.json()).
    then(res => {
      setWeather(res)
    }).catch((err)=> {console.log("error",err)})
  })
  let retrived = (expense) =>{
      console.log("in app",expense)
      setExpenses(prev => [expense,...prev])
    
  }

  let DeleteHandler = (id) => {
    console.log(id)
    setExpenses(prev => {
      return prev.filter(exp => exp.exptitle != id)
    })
  }

 
  return (
    <>
      <NewExpense getdetails={retrived}/>
      {
        expenses.map(expense =>(
          <ExpenseItem key={expense.id}
            exptitle = {expense.exptitle}
            expdate = {expense.expdate}
            price = {expense.price}
            OnDelete = {DeleteHandler}

          />
        ))
      }
        
      <h1>Employee Data</h1>
      {
        employees.map(employee =>(
           <EmployeeData key={employee.id}
            empid = {employee.empid}
            empname = {employee.empname}
            price = {employee.price}
            />
        ))
      }
      <h1>Enter Task</h1>

      <TaskManage /> 
      <div className='weather-head'>
     <h2 >5-day Weather Forcast</h2>
     <p>Hyderabad,India</p>
     </div>
     <div  className="weather-container" >
     {
      weather.map((weathers,index) =>(
         <div key={index} style={{ flex: "0 0 180px" }}>
        <WeatherDisp 
        
          day = {weathers.day}
          date = {weathers.date}
          icon = {weathers.icon}
          type = {weathers.type}
          temp = {weathers.temp}
        />
        </div>
      ))
     }
    </div>
    </>
  )
}

export default App
