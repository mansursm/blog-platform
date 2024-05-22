/**
 * Button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of the button.
 * @param {string} props.children - The content of the button.
 * @param {string} props.className - The CSS class name for the button.
 * @returns {JSX.Element} The rendered button element.
 */
import React from 'react'

function Button({type, children, className}) {
    return (
        <button type={type} className={className}>{children}</button> 
    )
}

export default Button
