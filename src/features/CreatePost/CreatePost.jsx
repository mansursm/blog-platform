import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectToken } from '../LoginPage/authSlice'
import { selectUser, fetchUserAsync } from '../AdminPage/userSlice'
import AuthForm from '../../components/AuthForm'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import Editor from '../../components/Editor'
import './CreatePost.css'

// TODO: 
// 1. add the ability to add tags to the post
// 2. display a message when the post is successfully created and redirect the user to the home page
// -------------------------------------------
// 2. add the ability to upload images
// 3. add the ability to format text
// 4. add the ability to save drafts
// 5. add the ability to preview the post before submitting it (this is good Idea)

/**
 * Represents the create post page component.
 *  
 * @component
 * @returns {JSX.Element} The create post page component.
 *  
 * @example
 * 
 * return (
 *  <CreatePost />
 * )
 * */
function CreatePost() {
    const dispatch = useDispatch()                 // Get the dispatch function from the store
    const navigate = useNavigate()                 // Get the navigate function from the router
    const token = useSelector(selectToken)         // Get the token from the store
    const user = useSelector(selectUser)           // Get the user from the store
    const [title, setTitle] = useState('')       // Create a state variable for the title
    const [tags, setTags] = useState('')           // Create a state variable for the tags
    const [content, setContent] = useState('')   // Create a state variable for the content
    const editorRef = useRef(null)               // Create a ref for the editor component

    useEffect(() => {
        if (token && !user) {
            console.log('Token:', token)
            dispatch(fetchUserAsync(token))
        }
    }, [token, dispatch, user])

    /**
     * Handles the text change event for the editor component.
     * 
     * @param {string} content - The content of the editor.
     * @returns {undefined}
     */
    const handleTextChange = (content, delta, source, editor) => {
        // Update the content state variable
        setContent(editor.getText())
    }


    /**
     * Handles the change event for the title input field.
     * 
     * @param {Event} event - The event object.
     * @returns {undefined}
     */
    const handleTitleChange = (event) => {
        setTitle(_ => event.target.value)
    }

    /**
     * Handles the change event for the tags input field.
     * 
     * @param {Event} event - The event object.
     * @returns {undefined}
     * 
     */
    const handleTagsChange = (event) => {
        setTags(_ => event.target.value)
    }

    /**
     * Handles the form submission.
     * 
     * @param {Event} event - The event object.
     * @returns {undefined}
     */
    const handleSubmit =async (event) => {
        event.preventDefault()
        console.log('Title:', title)
        console.log('Content:', content)

        // Create a new post object
        const post = {
            title,
            body: content,
            tags: [],
            reactions: {
                likes: 0,
                dislikes: 0,
            },
            views: 0,
            userId: user != null ? user._id : null,
        };

        // Check if user info is available
        if (user  && token) {
            console.log(user)
            console.log(token)
            await sendPost(post);
        }
    }

    /**
     * Sends the post to the backend.
     * 
     * @param {Object} post - The post object. 
     * @returns {undefined}
     * */
    const sendPost = async (post) => {
        try {
            const res = await fetch('http://localhost:4000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(post),
            });
            const data = await res.json();
            console.log(data);

            // Redirect the user to the home page once the post is created successfully
            // check if the post was created successfully
            // if it was, redirect the user to the home page
            // if it wasn't, display an error message
            if (res.ok) {
                // redirect the user to the home page
                alert('Post created successfully');
                navigate('/')
            } else {
                // display an error message as a toast notification
                alert('An error occurred while creating the post');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="createPostPage">
            <h1>Create Post</h1>
            <AuthForm handleSubmit={handleSubmit} children={
                <>
                    <InputField type="text" placeholder="Title" name="title" id="title" onChange={handleTitleChange} value={title} required={true} />
                    <InputField type="text" placeholder="Data Structures, Array, List" name="tags" id="tags" onChange={handleTagsChange} value={tags} required={true} />
                    <Editor ref={editorRef} onTextChange={handleTextChange} className={'editor'} />
                    <Button type="submit" className={'submit'}>Save Draft</Button>
                    <Button type="submit" className={'submit'}>Preview</Button>
                    <Button type="submit" className={'submit'}>Create Post</Button>
                </>

            } />
        </div>
    )
}

export default CreatePost
