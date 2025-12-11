import React from 'react'
import ExpenseForm from './ExpenseForm'

import "./NewExpense.css"
function NewExpense(props) {
    let givedata = (expense)=>{
        
        let data = {
                    ...expense ,
                    id : Math.random().toString()
        }
        props.getdetails(data)
        console.log("in new exp",data)
    }

  return (
    <div className='new-expense'>
        <ExpenseForm getdata={givedata}/>
    </div>
  )
}

export default NewExpense