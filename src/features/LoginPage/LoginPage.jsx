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
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import AuthForm from '../../components/AuthForm'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import TextButton from '../../components/TextButton'
import ErrorMessage from '../../components/ErrorMessage'
import './LoginPage.css'
import { loginAsync, selectIsAuthenticated, selectErrorMessage } from './authSlice'

function Login() {
    const [username, setUsername] = useState(''); // The username input field value.
    const [password, setPassword] = useState(''); // The password input field value.
    const [errorMessage, setErrorMessage] = useState(''); // The error message to display.
    const isAuthenticated = useSelector(selectIsAuthenticated) // The authentication status from the store.

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isAuthenticated) {
            // clear the form fields
            setUsername('')
            setPassword('')

            navigate('/')
        } else {
            setErrorMessage('Login failed')
        }
    }, [isAuthenticated, navigate])

    /**
     * Handles the form submission.
     *
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault()

        // validate the form fields
        const isValid = validateForm()
        if (isValid) {
            // extract the username and password from the form fields
            console.log('Username:', username)
            console.log('Password:', password)

            // dispatch the login action
            dispatch(loginAsync(username, password))
        }
    }

    
    /**
     * Validates the form fields.
     *  
     * @returns {boolean} - The validation result.
     */
    const validateForm = () => {
            // check if the username and password are not empty or null
        if (username === '' || password === '') {
            setErrorMessage('Username and password are required and cannot be empty')
            return false
        }
        // client side validation for username and password
        // cases to consider:
        // 1. check if username meets the username pattern 
        // 2. check if password meets the password pattern
        // 3. if they both meet requirements, return true
            
        
           // 2. check if email meets the email pattern
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
            setErrorMessage('username must be valid')
            return false
        }
        // password pattern - 8 to 20 characters, 
        if (password.length < 8 || password.length > 20) {
            setErrorMessage('Password must be 8-20 characters long')
            return false
        }

        return true
    }

    /**
     * Handles username changes to the input fields.
     * 
     * @param {Event} e - The change event.
     */
    const handleUsernameChange = (e) => {
        setUsername(()=> e.target.value)
        setErrorMessage('')
    }

    /**
     * Handles password changes to the input fields.
     * 
     * @param {Event} e - The change event.
     */ 
    const handlePasswordChange = (e) => {
        setPassword(()=> e.target.value)
        setErrorMessage('')
    }

    return (
      <div className="loginPage">
        <div className="loginPageContent">
          <h1>Login Page</h1>
          <AuthForm
            handleSubmit={handleSubmit}
            children={
              <>
                <InputField
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  onChange={handleUsernameChange}
                  value={username}
                />
                <InputField
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={handlePasswordChange}
                  value={password}
                />
                {errorMessage && (<ErrorMessage message={errorMessage} />)}
                <Button type="submit" className={"submit"}>
                  Login
                </Button>
              </>
            }
          />
          <TextButton
            children="Forgot password?"
            to="/forgot-password"
            hyperlinkChildren="Click here"
          />
          <TextButton
            children="Don't have an account?"
            to = "/register"
            hyperlinkChildren="Sign up"
          />
        </div>
      </div>
    );
}

export default Login
