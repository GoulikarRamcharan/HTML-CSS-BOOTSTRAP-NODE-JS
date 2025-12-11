import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './assets/Components/ExpenseItem'
import NewExpense from './assets/Components/NewExpense'

function App() {
   var dummy_expenses = [
                {id : 1 , exptitle :"Amazon " , expdate : new Date(2020,5,1) , price: "9000"},
                {id : 2 , exptitle: "Myntra ", expdate:  new Date(2020,11,4),price:"8000"},
                {id : 3 , exptitle:"Reliance Digital ", expdate: new Date(2020,10,6) , price:"80000"}
  ]
  let [expenses,setExpense] = useState(dummy_expenses)


  //retrive data from new expense
  let retrivedata = (expense) =>{
    console.log(expense)
    setExpense(prev => [expense,...prev])
  }

  let DeleteHandler = (id) =>{
      console.log(id)
      setExpense(prev =>{
        return prev.filter(exp => exp.exptitle !=id)
      })
  }
  return (
    <>
    <NewExpense getdata ={retrivedata}/>
      {
      expenses.map(expense => (
        <ExpenseItem key ={expense.id}
        exptitle = {expense.exptitle}
        expdate = {expense.expdate}
        price = {expense.price}
        onDelete = {DeleteHandler} />
      ))
      }
    </>
  )
}

export default App
