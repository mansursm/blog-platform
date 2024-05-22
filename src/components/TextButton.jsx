/**
 * A component that renders a text button with a hyperlink.
 *
 * @component
 * @param {ReactNode} children - The content of the text button.
 * @param {string} href - The URL to navigate to when the button is clicked.
 * @param {ReactNode} hyperlinkChildren - The content of the hyperlink within the button.
 * @returns {JSX.Element} The rendered TextButton component.
 */
import React from 'react'

function TextButton({children, href, hyperlinkChildren}) {
    return (
        <div className='textButton'>{children} <a href={href} target="_blank" rel="noopener noreferrer">{hyperlinkChildren}</a></div>
    )
}

export default TextButton
