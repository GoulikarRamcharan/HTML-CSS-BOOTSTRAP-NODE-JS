import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"
function NewExpense(props) {

    let getdetails = (newexpense) =>{
            let expense = {
                            ...newexpense,
                            id : Math.random().toString()
            }
            props.getdata(expense)
            console.log("in new",expense)
    }
  return (
    <div className='new-expense'>

        <ExpenseForm dodetails = {getdetails}/>
    </div>
  )
}

export default NewExpense