import React from 'react'
import "./ExpenseDate.css"
function ExpenseDate(props) {
    const month = props.expdate.toLocaleString('en-US', {month: 'long'});
    const day = props.expdate.toLocaleString('en-US', {day: '2-digit'});
    const year = props.expdate.getFullYear();
  return (
    <div className='expense-date'>
        <div className='expense-month'>
            {month}
        </div>
        <div className='expense-day'>
            {day}
        </div>
        <div className='expense-year'>
            {year}
        </div>
    </div>
  )
}

export default ExpenseDate