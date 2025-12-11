import { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import "./Expenseitem.css"
let Expenseitem = function(props){

    // var expDate = new Date()

    // var date = expDate.getUTCDate() + "-" + (expDate.getUTCMonth() + 1) + "-" + expDate.getUTCFullYear()
    // var expTitle = "Grocries"
    // var expamount = 7000
    // var Title = props.exptitle 
    
    let [title,setTitle]=useState(props.exptitle)
    let btnHandler = ()=>{

    //    Title = "updated Title"
    setTitle("Updated Title")
       console.log("btn clicked")
    }


    return (
        <div className="expense-item">
           <ExpenseDate expdate={props.expdate}/>
           <div className="expense-item__description">
               <h2>{title}</h2>
               <p className="expense-item__price">Rs {props.price}</p>
           </div>
            <button onClick={()=> props.onDelete(props.exptitle)} className="btn btn-danger">Delete</button>
       </div>
    )

}

export default Expenseitem