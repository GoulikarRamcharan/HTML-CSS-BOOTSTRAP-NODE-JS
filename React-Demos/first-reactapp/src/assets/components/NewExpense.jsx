import React from 'react'
import ExpenseForm from './ExpenseForm'

import "./NewExpense.css"
function NewExpense(props) {
    let SavingExpense = (NewExpense)=>{

        let expense = {
            ...NewExpense,
            id : Math.random().toString()
        }
        props.getexpense(expense)
        console.log("In New Expense",expense)
    }
  return (
    <div>
            <div className="new-expense">
            <ExpenseForm SaveExpense={SavingExpense}/>
        </div>

    </div>
  )
}

export default NewExpense