/**
 * Renders the Login page component.
 * 
 * This component displays a login form with input fields for username and password, a Login button, and two text buttons for password recovery and account creation.
 *
 * @component
 * @example
 * return (
 *   <Login />
 * )
 */
import React from 'react'
import { useState } from 'react'
import AuthForm from '../../components/AuthForm'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import TextButton from '../../components/TextButton'

function Login() {
    const [username, setUsername] = useState(''); // The username input field value.
    const [password, setPassword] = useState(''); // The password input field value.

    /**
     * Handles the form submission.
     *
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted')
    }

    /**
     * Handles username changes to the input fields.
     * 
     * @param {Event} e - The change event.
     */
    const handleUsernameChange = (e) => {
        setUsername(()=> e.target.value)
    }

    /**
     * Handles password changes to the input fields.
     * 
     * @param {Event} e - The change event.
     */ 
    const handlePasswordChange = (e) => {
        setPassword(()=> e.target.value)
    }

    return (
        <div className='loginpage'>
            <h1>Login Page</h1>
            <AuthForm handleSubmit={handleSubmit} children={
                <>
                    <InputField type="text" placeholder="Username" name="username" id="username" onChange={handleUsernameChange} value={username}/>
                    <InputField type="password" placeholder="Password" name="password" id="password" onChange={handlePasswordChange} value={password}/>
                    <Button type="submit" className={'submit'}>Login</Button>
                </>
            }/>
            <TextButton children='Forgot password?' href="http://" hyperlinkChildren="Click here"/>
            <TextButton children="Don't have an account?" href="http://" hyperlinkChildren="Sign up"/>
        </div>
    )
}

export default Login
