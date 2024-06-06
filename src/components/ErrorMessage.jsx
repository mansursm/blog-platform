/**
 * Renders an error message component.
 *
 * @returns {JSX.Element} The rendered error message component.
 */
import React from 'react'
import './ErrorMessage.css'

function ErrorMessage({message}) {
    return (
        <div className='errorMessage'>
            {/* Display an error message */}
            {message}
        </div>
    )
}

export default ErrorMessage
