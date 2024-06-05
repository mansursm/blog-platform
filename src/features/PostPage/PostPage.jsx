import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './PostPage.css'

function PostPage() {
    // extract the id from the URL
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the post with the given id
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                setPost(data);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            } 
        }

        fetchPost();
    }, [id]);

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
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default PostPage
