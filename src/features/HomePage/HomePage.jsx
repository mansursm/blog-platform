import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { NavLink, useMatch } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Header from '../../components/Header'
import PostList from '../../components/PostList'
import './HomePage.css'
import Modal from '../../components/Modal'
import {selectIsAuthenticated} from '../LoginPage/authSlice'


function HomePage() {
    // state to manage the modal visibility
    const [showModal, setShowModal] = useState(false);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const componentRef = useRef();

    // Determine active matches for the links
    const matchHome = useMatch('/');
    const matchCreatePost = useMatch('/create-post');
    const matchLogin = useMatch('/login');
    const matchAdmin = useMatch('/admin');

    // Close the modal when the user clicks outside the modal or close it when certain width is reached
    useEffect(() => {
        // Close the modal when the window width is greater than 768px
        function handleResize() {
            if (window.innerWidth > 768) {
                setShowModal(false);
            }
        }

        // Initial check for the window width
        handleResize();

        window.addEventListener('resize', handleResize);
    }, []);

    // log out the user
    function logout() {
        // log out the user
        // dispatch(logoutAsync());
    }

    // Show the login or logout link based on the authentication status
    function showLoginOrLogout() {
        if (isAuthenticated) {
            return (
                <li className='links' onClick={logout}>Log Out</li>
            )
        } else {
            return (
                <li><NavLink to="/login" className={`links ${matchLogin ? "active" : ""}`}>Login</NavLink></li>
            )
        }
    }

    // Click on the hamburger menu to display the navigation links
    function toggleModal() {
        setShowModal(!showModal);
    }

    // close the modal when the close button is clicked
    function closeModal() {
        setShowModal(false);
    }

    return (
        <div className='homePage' ref={componentRef}>
            <Header showModal={toggleModal} showLoginOrLogout={showLoginOrLogout}/>
            <PostList />
            {showModal && (<Modal children={(<ul>
                <li><NavLink to="/" className={`links ${matchHome ? "active" : ""}`}>Home</NavLink></li>
                <li><NavLink to="/create-post" className={`links ${matchCreatePost ? 'active' : ''}`}>Create Post</NavLink></li>
                <li><NavLink to="/admin" className={`links ${matchAdmin ? "active" : ""}`}>Admin</NavLink></li>
                {showLoginOrLogout()}
                </ul>)} closeModal={closeModal}/>)
            }
        </div>
    )
}

export default HomePage
