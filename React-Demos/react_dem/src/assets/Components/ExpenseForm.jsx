import React, { useState } from 'react'

import "./ExpenseForm.css"
function ExpenseForm(props) {
    let [inputtitle,setTitle] = useState("")
    let [inputamt,setAmount] = useState("")   
    let [inputdate,setDate] = useState("")

    let titleHandler = (e) =>{
        setTitle(e.target.value)
    }

    let amtHandler = (e) =>{
        setAmount(e.target.value)
    }

    let dateHandler = (e) =>{
        setDate(e.target.value)
    }

    let submitHandler = (e) =>{

        e.preventDefault()

        var user = {
            exptitle : inputtitle,
            expdate : new  Date(inputdate),
            price : inputamt
        }
        props.getdata(user)
        console.log("in Form",user)
        setTitle("")
        setAmount("")
        setDate("")
    }



  return (
    <div>
        
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input onChange={titleHandler} value={inputtitle} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input onChange={amtHandler} value={inputamt} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" onChange={dateHandler} value={inputdate}/>
            </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button'>Cancle</button>
                <button type='submit'>Add Expense</button> 
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm