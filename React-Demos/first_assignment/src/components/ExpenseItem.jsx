import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import "./ExpenseItem.css"
function ExpenseItem(props) {

    let [title,setTitle] = useState(props.exptitle)

    
  return (
    <div className="expense-item">
        <ExpenseDate expdate = {props.expdate} />
        <div className="expense-item__description">

            <h2>{title}</h2>
            <p className="expense-item__price">{props.price}</p>
        </div>
        <button onClick = {() => props.onDelete(props.exptitle)} className="btn btn-danger" >Delete</button>
    </div>
  )
}

export default ExpenseItem