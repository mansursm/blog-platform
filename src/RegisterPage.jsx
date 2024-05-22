/**
 * Renders the Register Page component.
 * 
 * This component displays a registration form with input fields for username, email, password, and confirm password, a Register button, and a text button to redirect to the Login page.
 *
 * @component
 * @returns {<RegisterPage />} The Register Page component.
 */
import React from 'react'
import AuthForm from './components/AuthForm'
import InputField from './components/InputField'
import Button from './components/Button'
import TextButton from './components/TextButton'
import { useState } from 'react'

function RegisterPage() {
    const [username, setUsername] = useState(''); // The username input field value.
    const [email, setEmail] = useState(''); // The email input field value.
    const [password, setPassword] = useState(''); // The password input field value.
    const [confirmPassword, setConfirmPassword] = useState(''); // The confirm password input field value.

    /**
     * Handles the form submission.
     * 
     * @param {Event} e - The form submission event.
     * @returns {void}
     * 
     * */
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted')
    }

    /**
     * Handles username changes to the input fields.
     * 
     * @param {Event} e - The change event.
     * @returns {void}
     * */
    const handleUsernameChange = (e) => {
        setUsername(()=> e.target.value)
    }

    /**
     * Handles email changes to the input fields.
     * 
     * @param {Event} e - The change event.
     * @returns {void}
     * */
    const handleEmailChange = (e) => {
        setEmail(()=> e.target.value)
    }

    /**
     * Handles password changes to the input fields.
     * 
     * @param {Event} e - The change event.
     * @returns {void}
     * */
    const handlePasswordChange = (e) => {
        setPassword(()=> e.target.value)
    }

    /**
     * Handles confirm password changes to the input fields.
     * 
     * 
     * @param {Event} e - The change event.
     * @returns {void}
     * */
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(()=> e.target.value)
    }

    return (
        <div className="registerPage">
            <h1>Register Page</h1>
            <AuthForm handleSubmit={handleSubmit} children={
                <>
                    <InputField type="text" placeholder="Username" name="username" id="username" onChange={handleUsernameChange} value={username}/>
                    <InputField type="email" placeholder="Email" name="email" id="email" onChange={handleEmailChange} value={email}/>
                    <InputField type="password" placeholder="Password" name="password" id="password" onChange={handlePasswordChange} value={password}/>
                    <InputField type="password" placeholder="Confirm Password" name="confirmPassword" id="confirmPassword" onChange={handleConfirmPasswordChange} value={confirmPassword}/>
                    <Button type="submit" className={'submit'}>Register</Button>
                </>
            }/>
            <TextButton children="Already have an account?" href="http://" hyperlinkChildren="Login"/>
        </div>
    )
}

export default RegisterPage
