/**
 * AuthForm component.
 *
 * @component
 * @param {Function} handleSubmit - The function to handle form submission.
 * @param {ReactNode} children - The child components to render within the form.
 * @returns {JSX.Element} AuthForm -  The rendered AuthForm component.
 */
import React from 'react'

function AuthForm({ handleSubmit, children}) {
    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default AuthForm
