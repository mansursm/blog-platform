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

const PrivateRoute = ({isAuthenticated}) => {
    // Check if the user is authenticated
    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    )
}

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<PrivateRoute isAuthenticated={false} />}>
                        <Route path="/create-post" element={<CreatePost />} />
                    </Route>
                    <Route element={<PrivateRoute isAuthenticated={false} />}>
                        <Route path="/admin" element={<AdminPage />} />
                    </Route>
                    <Route path="/register" element={<Register />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/edit-post/:id" element={<EditPost />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
