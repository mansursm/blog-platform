import React from 'react'
import { useState } from 'react'
import AdminHeader from '../../components/AdminHeader'
import Analytics from '../../components/Analytics'
import RecentBlogs from '../../components/RecentBlogs'
import Card from '../../components/Card'
import { selectIsAuthenticated } from '../LoginPage/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import './AdminPage.css'

//TODO: Admin page needs more work
// 1. Break it into smaller components: (Header - navigation, main content - user info, stats - (total posts, comments, likes), analytical - visitors, recent posts)
// 2. Add more functionality
// 3. Add more styles
// 4. Add more data
// 5. Add more interactivity
// 6. Add more responsiveness
// 7. Add more animations
// 8. Add more transitions
// 9. Add more media queries
// 10. modify the menu so give an option to also view the blog, home page, and create post page from the admin page on top posts, comments, likes, and analytics

function AdminPage() {
    const [currentPage, setCurrentPage] = useState('dashboard')
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const dispatch = useDispatch()

    // return current page
    const renderPage = () => {  
        switch(currentPage) {
            case 'dashboard':
                return (
                    <div className="dashboard">
                        <Analytics />
                        <RecentBlogs />
                    </div>
                )
            case 'posts':
                return (
                  <div className="posts">
                    <div className="blogList">
                      <Card
                        post={[
                          "14003",
                          "Post Title 1",
                          "2024-05-20",
                          "#DevOps, #IT, #Architecture",
                        ]}
                      />
                      <Card
                        post={[
                          "14003",
                          "Post Title 1",
                          "2024-05-20",
                          "#DevOps, #IT, #Architecture",
                        ]}
                      />
                      <Card
                        post={[
                          "14003",
                          "Post Title 1",
                          "2024-05-20",
                          "#DevOps, #IT, #Architecture",
                        ]}
                      />
                      <Card
                        post={[
                          "14003",
                          "Post Title 1",
                          "2024-05-20",
                          "#DevOps, #IT, #Architecture",
                        ]}
                      />
                      <Card
                        post={[
                          "14003",
                          "Post Title 1",
                          "2024-05-20",
                          "#DevOps, #IT, #Architecture",
                        ]}
                      />
                      <Card
                        post={[
                          "14003",
                          "Post Title 1",
                          "2024-05-20",
                          "#DevOps, #IT, #Architecture",
                        ]}
                      />
                    </div>
                  </div>
                );
            case 'settings':
                return (
                    <div className="settings">
                        <h1>Settings</h1>
                    </div>
                )
            default:
                return (
                    <div className="dashboard">
                        <Analytics />
                        <RecentBlogs />
                    </div>
                )
        }
    }

    // click handler for navigation
    const handleClick = (ev) => {
        setCurrentPage(ev.target.textContent.toLowerCase())

        // remove active class from all elements
        const elements = document.querySelectorAll('.navigation li')
        elements.forEach(element => {
            element.classList.remove('active')
        })

        // add active class to the clicked element
        ev.target.classList.add('active')
    }


    return (
       <div className="adminPage">
            <div className="container">
            <AdminHeader handleClick={handleClick}/>
            <div className="adminMain">
                {renderPage()}
            </div>
            </div>
       </div> 
    )
}

export default AdminPage
