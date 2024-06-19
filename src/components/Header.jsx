/**
 * Represents the header component of the blog platform.
 * 
 * @component
 * @returns {JSX.Element} The rendered header component.
 */
import React from 'react'
import { NavLink, useMatch } from 'react-router-dom'
import './Header.css'

function Header({showModal, showLoginOrLogout}) {
        // Determine active matches for the links
        const matchHome = useMatch('/');
        const matchCreatePost = useMatch('/create-post');
        const matchAdmin = useMatch('/admin');

    return (
        <div className='header'>
            <div className='logo'>Blog App</div>
            <div className="search">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
            <div className="navigation">
                <ul>
                    <li><NavLink to="/" className={`links ${matchHome ? "active" : ""}`}>Home</NavLink></li>
                    <li><NavLink to="/create-post" className={`links ${matchCreatePost ? 'active' : ''}`}>Create Post</NavLink></li>
                    <li><NavLink to="/admin" className={`links ${matchAdmin ? "active" : ""}`}>Admin</NavLink></li>
                    {showLoginOrLogout()}
                </ul>

                <div className="hamBurgerMenu" onClick={showModal}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    )
}

export default Header
