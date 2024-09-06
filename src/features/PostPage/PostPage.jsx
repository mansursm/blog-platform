import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './PostPage.css'
import { getCurrentPost, getPostAsync } from '../HomePage/postsSlice'

function PostPage() {
    // extract the id from the URL
    const { id} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const post = useSelector(getCurrentPost);

    // Fetch the post with the given id

    useEffect(() => {
        console.log('test0 -> inside useEffect for id & dispatch')
        // Fetch the post with the given id
        dispatch(getPostAsync(id))
            .then(() => setLoading(false))
            .catch((error) => setError(error));

        // after dispatching the action, the post will be stored in the state
        // access the post from the state using the getCurrentPost selector

    }, [id, dispatch]);

    useEffect(() => {
        dispatch(getPostAsync(id))
            .then(() => setLoading(false))
            .catch((error) => setError(error));
    }, []);

    // Display a loading message while the post is being fetched
    if (loading) {
        return <p>Loading post...</p>
    }
    
    // Display an error message if the post could not be fetched
    if (error) {
        return <p>Error fetching post: {error.message}</p>
    } 
    
    // Display the post
    return (
        <div className='postPage-content'>
            <h1>{post[1]}</h1>
            <p>{post[2]}</p>
        </div>
    )
}

export default PostPage
