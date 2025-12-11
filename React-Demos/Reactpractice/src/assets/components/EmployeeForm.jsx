import React, { useState } from 'react'

function EmployeeForm(props) {

    let [idvalue,setId] = useState("")
    let [namevalue,setName] = useState("")
    let [deptvalue,setDept] = useState("")


    let idHandler = (e) =>{

        setId(e.target.value)
    }

    let NameHandler = (e) =>{

        setName(e.target.value)
    }

    let DeptHandler = (e) =>{
        setDept(e.target.value)
    }

    let submitHandler = (e) =>{

        e.preventDefault()

        var empdata = {
            empid : idvalue,
            empname : namevalue,
            empdept : deptvalue
        }
        props.getemp(empdata)
        console.log("in form",empdata)
        //to send data into express
       fetch("http://localhost:3000/save",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(empdata)

       })
       .then(res => res.json())
       .then((msg) => {console.log("msg recieved",msg)})
       .catch((err) => {console.log("error",err)})
       
        setId("")
        setDept("")
        setName("")
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <div>
            <label>Enter Employee ID</label>
            <input onChange={idHandler} value={idvalue} />
            </div>
            <div>
                 <label>Enter Employee Name</label>
            <input onChange={NameHandler} value={namevalue} />
            </div>
            <div>
                 <label>Enter Employee Dept</label>
            <input onChange={DeptHandler} value={deptvalue} />
            </div>
        </div>
        <div>
            <input type='submit' />
        </div>
        </form>
    </div>
  )
}

export default EmployeeForm