

import { useState } from "react"
import Calculator from "./assets/components/Calculator"
import Expenseitem from "./assets/components/Expenseitem"
import ListComponent from "./assets/components/ListComponent"
import NewExpense from "./assets/components/NewExpense"
import ParentComponent from "./assets/components/ParentComponent"
import Person from "./assets/components/person"
import SimpleForm from "./forms/SimpleForm"
import DeleteComponent from "./assets/components/DeleteComponent"
import SimpleUncontorlledForm from "./forms/SimpleUncontorlledForm"

function App() {
  
  // var expenses = [
  //               {id : 1 , exptitle :"Amazon " , expdate : new Date(2020,5,1) , price: "9000"},
  //               {id : 2 , exptitle: "Myntra ", expdate:  new Date(2020,11,4),price:"8000"},
  //               {id : 3 , exptitle:"Reliance Digital ", expdate: new Date(2020,10,6) , price:"80000"}
  // ]

   var dummy_expenses = [
                {id : 1 , exptitle :"Amazon " , expdate : new Date(2020,5,1) , price: "9000"},
                {id : 2 , exptitle: "Myntra ", expdate:  new Date(2020,11,4),price:"8000"},
                {id : 3 , exptitle:"Reliance Digital ", expdate: new Date(2020,10,6) , price:"80000"}
  ]

  let [expenses,setExpenses] = useState(dummy_expenses) 
  // let [expense,setExpense] = useState()

  let doexpense = (expenseData)=>{

      console.log("In App ",expenseData)
     setExpenses(prev => [expenseData, ...prev])
  }
  let deleteHandler = (id) =>{
    console.log("in delete")
        setExpenses(prev => {
          return prev.filter(exp => exp.exptitle != id)})
  }


  return (
    <>
      <div className="App">
        <h1>Hello React</h1>
        <hr></hr>
        <p>Simple Para</p>
        <hr></hr>
        <h4>Square of array</h4>
         <ListComponent />
        <hr></hr>
        <h4>login form</h4>
        <SimpleForm />
        <hr></hr>
        <SimpleUncontorlledForm />
        <hr></hr>
        <Calculator />
        <hr></hr>
        <ParentComponent />
        <hr></hr>
        <NewExpense getexpense={doexpense}/>
        <hr></hr>
        <DeleteComponent />
        <hr></hr>
        {
          expenses.map(expense => (
            <Expenseitem  key={expense.id}
              exptitle = {expense.exptitle}
              expdate = {expense.expdate}
              price = {expense.price}
              onDelete = {deleteHandler} />
          ))
        }
        {/* <Expenseitem exptitle={expenses[0].exptitle} expdate={expenses[0].expdate} price={expenses[0].price}/>
        <Expenseitem exptitle={expenses[1].exptitle} expdate={expenses[1].expdate} price={expenses[1].price}/>
        <Expenseitem exptitle={expenses[2].exptitle} expdate={expenses[2].expdate} price={expenses[2].price}/> */}
        <hr></hr>
        <Person pname="Sher Bolte" age="23"/>
        <Person pname="Sher" age="22"/>
        <Person pname="Kargosh" age="22"/>
       
      </div>
    </>
  )
}

export default App
