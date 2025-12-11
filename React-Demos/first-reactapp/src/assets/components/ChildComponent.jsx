import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <h4>
            ChildComponent, Welcome {props.cname}
        </h4>
        </div>
  )
}

export default ChildComponent