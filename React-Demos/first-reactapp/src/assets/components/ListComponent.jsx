import React from 'react'

function ListComponent() {

    // let arr = [10,20,30,40,50]

    //regular function
    // var newarr = arr.map(no => {

    //     return <li>{no * no}</li>
    // })

    //round bracket array
    // var newarr = arr.map(no => (
    //     <li>{no * no}</li>
    // ))    
    // let items = [{iname : "abc"},
    //               {iname : "bcd"},
    //               {iname : "def"}  
    //             ]

    // var itemsn = items.map(i => {
    //     return <p>{i.iname}</p>
    // })     
    
    let users = [{
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

var tusers = users.map(user => (
    <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.uname}</td>
        <td>{user.email}</td>
    </tr>
))

  return (
    <div>
            {/* {newarr}
            <hr></hr> */}
            {/* {itemsn}
            <hr></hr> */}
            <table border='1px '>{tusers}</table>
    </div>
  )
}

export default ListComponent