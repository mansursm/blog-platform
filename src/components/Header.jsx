import React from 'react'

function Header() {
    return (
        <div className='header'>
            <div className='logo'>Blog App</div>
            <div className="search">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                    <li>Admin</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
