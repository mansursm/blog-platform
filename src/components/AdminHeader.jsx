import React from 'react'
import './AdminHeader.css'

function AdminHeader({handleClick}) {
    return (
        <div className="admin-header">
            <div className='profile'>
                <img src="https://via.placeholder.com/150" alt="profile photo" className='profile-photo'/>
                <div className="profile-info">
                    <h3>John Doe</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li className='active' onClick={handleClick}>Dashboard</li>
                    <li onClick={handleClick}>Posts</li>
                    <li onClick={handleClick}>Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default AdminHeader
