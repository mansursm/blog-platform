/**
 * Represents a card component that displays a post as a card.
 * 
 * @component
 * @returns {JSX.Element} - The Card component.
 */
import React from 'react'
import Button from './Button'
import './Card.css'

function Card({post, handleClick}) {
    const [id, title, tags, date] = post;

    return (
<div className="card" onClick={handleClick}>
      <div className="card-content" >
        <div className="card-header">
          <p className='card-id'>{id}</p>
          <h4 className="card-title" >{title}</h4>
        </div>
        <div className="card-body">
          <span className='card-tags'>{tags}</span>
          <span className="card-date">{date}</span>
        </div>
      </div>
    </div>
    )
}

export default Card
