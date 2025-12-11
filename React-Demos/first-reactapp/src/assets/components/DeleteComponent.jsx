import React, { useState } from 'react'

function DeleteComponent() {
     let userlist = [{
        id : 101,
        uname : "ram",
        email : "ram@gmail.com"
        },
        {
        id : 102,
        uname : "raj",
        email : "raj@gmail.com"
    },
    {
        id : 103,
        uname : "jai",
        email : "jai@gmail.com"
    }
]
let [users,setUsers] = useState(userlist)
console.log(users)
  let deleteHandler = (id) =>{
      console.log(id)
      setUsers(prev => {return prev.filter(user => user.id != id)})
  }

  
  return (
    <div>
        <table border='1'>
        {
          
          users.map(user => (
             <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.uname}</td>
              <td>{user.email}</td>
              <td> <button  className='btn btn-danger' onClick={()=>deleteHandler(user.id)}>Delete</button></td>
             </tr> 

          ))
        }
        </table>
    </div>
  )
}

export default DeleteComponent