import React, { useState } from 'react'
import "./ExpenseForm.css"
function ExpenseForm(props) {

    let [inputtitle,setTitle] = useState("")
    let [inputamt,setamt] = useState("")
    let [inputdate,setdate] = useState("")

    let inputHandler = (e) =>{
        setTitle(e.target.value)
    }
    let inputamtHandler = (e) =>{
        setamt(e.target.value)
    }
    let inputdatehandler = (e) =>{
        setdate(e.target.value)
    }

    let submitHandler = (e) =>{
        e.preventDefault()

        var user = {
            exptitle : inputtitle,
            expdate : new Date(inputdate),
            price : inputamt
        }
        props.dodetails(user)
        console.log("in form",user)
        setTitle("")
        setamt("")
        setdate("")

    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                     <input onChange={inputHandler} value={inputtitle} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input onChange={inputamtHandler} value={inputamt} />
                </div>
                <div className="new-expense__controls">
                    <label>Date Of Purchase</label>
                    <input onChange={inputdatehandler} type='date' value={inputdate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button'>cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm