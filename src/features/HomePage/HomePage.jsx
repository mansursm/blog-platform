import React from 'react'
import { useState } from 'react'
import { NavLink, useMatch } from 'react-router-dom'
import Header from '../../components/Header'
import PostList from '../../components/PostList'
import './HomePage.css'
import Modal from '../../components/Modal'

function HomePage() {
    // state to manage the modal visibility
    const [showModal, setShowModal] = useState(false);

    // Determine active matches for the links
    const matchHome = useMatch('/');
    const matchCreatePost = useMatch('/create-post');
    const matchLogin = useMatch('/login');
    const matchAdmin = useMatch('/admin');

    // Click on the hamburger menu to display the navigation links
    function toggleModal() {
        setShowModal(!showModal);
    }

    // close the modal when the close button is clicked
    function closeModal() {
        setShowModal(false);
    }

    return (
        <div className='homePage'>
            <Header showModal={toggleModal}/>
            <PostList />
            {showModal && (<Modal children={(<ul>
                <li><NavLink to="/" className={`links ${matchHome ? "active" : ""}`}>Home</NavLink></li>
                <li><NavLink to="/create-post" className={`links ${matchCreatePost ? 'active' : ''}`}>Create Post</NavLink></li>
                <li><NavLink to="/login" className={`links ${matchLogin ? "active" : ""}`}>Login</NavLink></li>
                <li><NavLink to="/admin" className={`links ${matchAdmin ? "active" : ""}`}>Admin</NavLink></li>
                </ul>)} closeModal={closeModal}/>)
            }
        </div>
    )
}

export default HomePage
