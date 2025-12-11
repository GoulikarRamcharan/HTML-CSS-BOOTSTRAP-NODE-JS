import React from 'react'

function EmployeeDisp(props) {
  return (
    <div>
        <div>
           ID: {props.empid}
        </div>
        <div>
           Name: {props.empname}
        </div>
        <div>
           Department: {props.empdept}
        </div>
    </div>
  )
}

export default EmployeeDisp