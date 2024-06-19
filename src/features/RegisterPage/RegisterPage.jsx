/**
 * Renders the Register Page component.
 * 
 * This component displays a registration form with input fields for username, email, password, and confirm password, a Register button, and a text button to redirect to the Login page.
 *
 * @component
 * @returns {<RegisterPage />} The Register Page component.
 */
import React from 'react'
import AuthForm from '../../components/AuthForm'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import TextButton from '../../components/TextButton'
import ErrorMessage from '../../components/ErrorMessage'
import './RegisterPage.css'
import { useState } from 'react'
import { registerAsync } from '../LoginPage/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken } from '../LoginPage/authSlice'
import { useNavigate } from 'react-router'

function RegisterPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState(''); // The email input field value.
    const [password, setPassword] = useState(''); // The password input field value.
    const [confirmPassword, setConfirmPassword] = useState(''); // The confirm password input field value.
    const [errorMessage, setErrorMessage] = useState(''); // The error message to display.
    const token = useSelector(selectToken)

    const validateForm = () => {
        // 1. check if email meets the email pattern
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorMessage('Email must be valid')
            return false
        }
        // 2. check if password meets the password pattern
        if (password.length < 8 || password.length > 20) {
            setErrorMessage('Password must be 8-20 characters long')
            return false
        }
        // 3. check if confirm password matches the password
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match')
            return false
        }
        // 4. check if password meets the password pattern
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/.test(password)) {
            setErrorMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
            return false
        }
        // if they all meet requirements,

        return true
    }

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

        // validate the form fields
        const isValid = validateForm()

        if (isValid) {
          // extract the username, email, password, and confirm password from the form fields
          console.log("Email:", email);
          console.log("Password:", password);
          console.log("Confirm Password:", confirmPassword);
          // dispatch the register action
          dispatch(registerAsync(email, password));

          // check if the token is not null
          if (token !== null) {
            // clear the form fields
            // clear the form fields
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            // redirect to the home page
            navigate("/");
          }
        }
    }

    /**
     * Handles email changes to the input fields.
     * 
     * @param {Event} e - The change event.
     * @returns {void}
     * */
    const handleEmailChange = (e) => {
        setEmail(()=> e.target.value)
        if (errorMessage !== '') {
            setErrorMessage('')
        }
    }

    /**
     * Handles password changes to the input fields.
     * 
     * @param {Event} e - The change event.
     * @returns {void}
     * */
    const handlePasswordChange = (e) => {
        setPassword(()=> e.target.value)
        if (errorMessage !== '') {
            setErrorMessage('')
        }
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
        if (errorMessage !== '') {
            setErrorMessage('')
        }
    }

    return (
        <div className="registerPage">
            <div className="registerPageContent">
                <h1>Register Page</h1>
                <AuthForm handleSubmit={handleSubmit} children={
                    <>
                        <InputField type="email" placeholder="Email" name="email" id="email" onChange={handleEmailChange} value={email}/>
                        <InputField type="password" placeholder="Password" name="password" id="password" onChange={handlePasswordChange} value={password}/>
                        <InputField type="password" placeholder="Confirm Password" name="confirmPassword" id="confirmPassword" onChange={handleConfirmPasswordChange} value={confirmPassword}/>
                        {errorMessage && <ErrorMessage message={errorMessage}/>}
                        <Button type="submit" className={'submit'}>Register</Button>
                    </>
                }/>
                <div className="passwordRequirements">
                    <h3>Password Requirements:</h3>
                    <ul>
                        <li>8-20 characters long</li>
                        <li>At least one uppercase letter</li>
                        <li>At least one lowercase letter</li>
                        <li>At least one number</li>
                        <li>At least one special character</li>
                    </ul>
                </div>
                <TextButton children="Already have an account?" to={'/login'} hyperlinkChildren="Login"/>
            </div>
        </div>
    )
}

export default RegisterPage
