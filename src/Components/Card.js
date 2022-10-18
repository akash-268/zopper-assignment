import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <div className='upper'>
            <img src={props.image}/>
            <h3>{props.heading}</h3>
        </div>
        <div className='lower'>
            <p>{props.description}</p>
            <button className='btn'>Find Plans</button>
        </div>
    </div>
  )
}

export default Card