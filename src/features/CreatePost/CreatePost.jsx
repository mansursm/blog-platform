import React from 'react'
import { useState, useRef } from 'react'
import AuthForm from '../../components/AuthForm'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import Editor from '../../components/Editor'

function CreatePost() {
    const [title, setTitle] = useState('')       // Create a state variable for the title
    const editorRef = useRef(null)               // Create a ref for the editor component

    /**
     * Handles the text change event for the editor component.
     * 
     * @param {string} content - The content of the editor.
     * @returns {undefined}
     */
    const handleTextChange = (content, delta, source, editor) => {
        console.log(content, delta, source, editor)
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
     * Handles the form submission.
     * 
     * @param {Event} event - The event object.
     * @returns {undefined}
     */
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Title:', title)
        console.log('Content:', content)
    }

    return (
        <div className="createPostPage">
            <h1>Create Post</h1>
            <AuthForm handleSubmit={handleSubmit} children={
                <>
                    <InputField type="text" placeholder="Title" name="title" id="title" onChange={handleTitleChange} value={title} required={true}/>
                    <Editor ref={editorRef} onTextChange={handleTextChange} className={'editor'}/>
                    <Button type="submit" className={'submit'}>Create Post</Button>
                </>
            
            } />
        </div>
    )
}

export default CreatePost
