import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
        <img src="https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
        style={{width: "100%", height: "200px", objectFit: "cover", objectPosition: "center center"}}/>
      <h1>{props.title}</h1>
      <p>{props.description }</p>
    </div>
  )
}

export default Card
