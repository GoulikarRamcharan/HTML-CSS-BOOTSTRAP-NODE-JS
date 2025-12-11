import React, { useState } from 'react'
import "./ExpenseForm.css"
function ExpenseForm(props) {

    let [inputname,setName] = useState("")
    let [inputedate,setDate] = useState("")
     let [inputamount,setInputamount] = useState("")

    let NameHandler = (e)=>{
            setName(e.target.value)
    }
    let amtHandler =(e)=>{
        setInputamount(e.target.value)
    }
    let DateHandler = (e)=>{
        setDate(e.target.value)
    }

    let submitHandler = (e)=>{
        e.preventDefault()

        var log = {
            exptitle : inputname,
            price : inputamount,
            expdate : new Date(inputedate)
        }

        props.getDetails(log)
        console.log("In Main",  log)
        setName("")
        setDate("")
        setInputamount("")

    }



  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">   
                    <label>Enter Title : </label>
                    <input onChange={NameHandler} value={inputname}/><br></br><br></br>
                </div>
                <div className="new-expense__control">
                    <label>Enter Price : </label>
                    <input onChange={amtHandler} value={inputamount}/><br></br><br></br>
                 </div>
                <div className="new-expense__control">
                    <label>Enter Date :</label>
                    <input type='date' onChange={DateHandler}  value={inputedate} /><br></br><br></br>
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