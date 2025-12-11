import React, { useState } from 'react'

function SimpleForm() {

    //creating a state for username and password
    let [uname,setuname] = useState("")
    let [upass,setpass] = useState("")

    //creating the handler for username
    let unameHandler = (event)=>{
        setuname(event.target.value)
       
    }

    //creating the handler for password
     let passHandler = (event)=>{
        setpass(event.target.value)
        
    }

    //handling the submit button
    let submitHandler = (event)=>{
            event.preventDefault()

            //user object that contains user object
            var user = {
                username : uname,
                password : upass
            }
            //printing user objects
            console.log(user)
            setuname("")
            setpass("")
    }

  return (
    <div >
        <form onSubmit={submitHandler}>
            username: <input onChange={unameHandler} value={uname} className='form-control'/> <br></br>
            Password: <input onChange={passHandler} value={upass} className='form-control' type='password'/> <br></br>
            <input type='submit' value="Submit "  className='btn btn-primary'/>
        </form>
        </div>
  )
}

export default SimpleForm