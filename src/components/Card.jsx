/**
 * Represents a card component that displays a post as a card.
 * 
 * @component
 * @returns {JSX.Element} - The Card component.
 */
import React from 'react'

function Card() {
    return (
        <div className="card">
            <a href="/link-to-card">
                <div className="card-content">
                    <div className="card-title"><span>Title:</span> Test</div>
                    <div className="card-excerpt"><span>Excerpt:</span> This is a test to Create a card</div>
                    <div className="card-date"><span>Date Posted:</span> 2024-05-20</div>
                    <div className='card-createdby'><span>Author:</span> Mansur</div>
                </div>
            </a>
        </div>
    )
}

export default Card
