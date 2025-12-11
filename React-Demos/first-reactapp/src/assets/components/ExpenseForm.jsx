import React, { useState } from 'react'
import "./ExpenseForm.css"
function ExpenseForm(props) {

    let [inputTitle,setInputtitle] = useState("")
    let [inputamount,setInputamount] = useState("")
    let [inputdate,setInputdate] = useState("")


    let titleHandler =(e)=>{
        setInputtitle(e.target.value)
    }

    let amtHandler =(e)=>{
        setInputamount(e.target.value)
    }

    let dateHandler =(e)=>{
        setInputdate(e.target.value)
    }

    let submitHandler =(e)=>{
        e.preventDefault()
        var expense = {
            exptitle : inputTitle,
            price : inputamount,
            expdate : new Date(inputdate)
        }        
        console.log("In Expense Form",expense)
        props.SaveExpense(expense)
        setInputtitle("")
        setInputamount("")
        setInputdate("")
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
               <div className="new-expense__control">
                   <label>Title</label>
                   <input onChange={titleHandler} value={inputTitle}/>
               </div> 
               <div className="new-expense__control">
                   <label>Amount</label>
                   <input type="number" onChange={amtHandler} value={inputamount}/>
               </div>
               <div className="new-expense__control">
                   <label>Date</label>
                   <input type="date"  onChange={dateHandler} value={inputdate} />
               </div>
            </div>
            <div className="new-expense__actions">
                <button type="button"  >Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>

    </div>
  )
}

export default ExpenseForm