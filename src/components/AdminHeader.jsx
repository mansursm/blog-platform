import React from 'react'
import './AdminHeader.css'

function AdminHeader() {
    return (
        <div className="admin-header">
            <h4>Welcome Back!</h4>
            <div className="navigation">
                <ul>
                    <li className='active'>Dashboard</li>
                    <li>Posts</li>
                    <li>Comments</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default AdminHeader
