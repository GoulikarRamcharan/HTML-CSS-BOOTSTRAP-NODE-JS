import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  return (
    <div>
        <h2>ParentComponent</h2>
        <ChildComponent  cname="VeduSher"/>
    </div>
  )
}

export default ParentComponent