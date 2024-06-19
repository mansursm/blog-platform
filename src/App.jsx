import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminPage from './features/AdminPage/AdminPage'
import CreatePost from './features/CreatePost/CreatePost'
import EditPost from './features/EditPost/EditPost'
import Home from './features/HomePage/HomePage'
import LoginPage from './features/LoginPage/LoginPage'
import Post from './features/PostPage/PostPage'
import Register from './features/RegisterPage/RegisterPage'
import {Navigate, Outlet} from 'react-router-dom'
import { selectIsAuthenticated } from './features/LoginPage/authSlice'
import { useSelector } from 'react-redux'

// PrivateRoute component
// This component checks if the user is authenticated before rendering the child components (Outlet) 
// or redirects to the login page if the user is not authenticated. 
// It takes a prop isAuthenticated which is a boolean value that determines if the user is authenticated.
function PrivateRoute ({isAuthenticated}) {
    // Check if the user is authenticated
    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    )
}

// TODO: Add a 404 page to handle unknown routes
// The App component contains the routing configuration for the application.
// It uses the BrowserRouter component from react-router-dom to enable routing in the application.


// TODO: edit post page routing implementation
// only authenticated user and the user who created the post can edit the post
function EditPostRoute({isAuthenticated, userId, postUserId}) {
    // for the case when user is null or undefined
    userId = userId || ''
    postUserId = postUserId || ''

    // Check if the user is authenticated and the user id matches the post user id
    return (
        isAuthenticated && userId === postUserId ? <Outlet /> : <Navigate to="/login" />
    )
}


function App() {
    const isAuthenticated = useSelector(selectIsAuthenticated)

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                        <Route path="/create-post" element={<CreatePost />} />
                    </Route>
                    <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                        <Route path="/admin" element={<AdminPage />} />
                    </Route>
                    <Route path="/register" element={<Register />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route element={<EditPostRoute isAuthenticated={isAuthenticated} userId={null} postUserId={null}/>}>
                        <Route path="/edit-post/:id" element={<EditPost />} />
                    </Route>
                    
                </Routes>
            </Router> 
        </div>
    )
}

export default App
