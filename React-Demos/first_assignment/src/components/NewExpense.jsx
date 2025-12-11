import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
function NewExpense(props) {
    let doretriving = (requesting)=>{
        var data = {
            ...requesting,
            id : Math.random().toString()
        }
        props.getdetails(data)
        console.log("In New Expense",data)
    }


  return (
    <div className="new-expense">
        <ExpenseForm getDetails={doretriving}/>
    </div>
  )
}

export default NewExpense