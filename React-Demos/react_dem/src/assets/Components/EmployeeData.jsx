import React from 'react'

function EmployeeData(props) {
  return (
    <div>
    <div>
       
            <tr >
                <td>{props.empid}</td>
                <td>{props.empname}</td>
                <td>{props.price}</td>
            </tr>
        
    </div>
    </div>
  )
}

export default EmployeeData