import React, { useRef } from 'react'

function SimpleUncontorlledForm() {

    let unameref = useRef("")

    let submitHandler = (e) => {
        e.preventDefault()
        console.log(unameref.current.value)
    }
  return (
    <div>
        <form onSubmit = {submitHandler}>

            Enter Username :
            <input ref={unameref} />
            <input type='submit'  />
        </form>
    </div>
  )
}

export default SimpleUncontorlledForm