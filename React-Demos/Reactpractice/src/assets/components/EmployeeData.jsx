import React from 'react'
import EmployeeForm from './EmployeeForm'

function EmployeeData(props) {

    let recieveemp =  (emp) =>{

        let empdata = {
                        ...emp
        }
        props.getdata(empdata)
        console.log("in data",empdata);
    }
  return (
    <div>

        <EmployeeForm getemp = {recieveemp}/>
    </div>
  )
}

export default EmployeeData