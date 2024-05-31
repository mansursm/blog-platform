import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import Analytics from '../../components/Analytics'
import RecentBlogs from '../../components/RecentBlogs'

//TODO: Admin page needs more work
// 1. Break it into smaller components: (Header - navigation, main content - user info, stats - (total posts, comments, likes), analytical - visitors, recent posts)
// 2. Add more functionality
// 3. Add more styles

function AdminPage() {
    return (
       <div className="adminPage">
            <AdminHeader />
            <div className="adminMain">
                <div className="user-info-stats">
                    <div className="user-info">
                        <p className="name">
                            John Doe
                        </p>
                        <p className="role">Writer / Admin</p>
                    </div>
                    <div className="stats">
                        <div className="stat">
                            <div className="value">32</div>
                            <div className="name">Total Posts</div>
                        </div>
                        <div className="stat">
                            <div className="value">12</div>
                            <div className="name">Total Comments</div>
                        </div>
                        <div className="stat">
                            <div className="value">4</div>
                            <div className="name">Total Likes</div>
                        </div>
                    </div>
                </div>
                <div className="analyticsRecentBlogs">
                    <Analytics />
                    <RecentBlogs />
                </div>
            </div>
       </div> 
    )
}

export default AdminPage
