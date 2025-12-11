import React from 'react'

function NewsBody(props) {
  return (
    <div>
        <h2 className=" fw-bold">{props.title}</h2>
        <h3 className=" text-muted mb-3">{props.subtitle}</h3>
        <p style={{textAlign : "justify"}}>
            {props.content}
        </p>
        <p 
  style={{ 
    textAlign: "right", 
    fontStyle: "italic", 
    marginTop: "20px",
    opacity: "0.7" 
  }}>{props.author}</p>
    </div>
    
  )
}

export default NewsBody