/**
 * Editor component for rendering a rich text editor using ReactQuill.
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.readOnly - Determines if the editor is read-only.
 * @param {string} props.defaultValue - The default value of the editor.
 * @param {function} props.onTextChange - Callback function triggered when the text content of the editor changes.
 * @param {function} props.onSelectionChange - Callback function triggered when the selection in the editor changes.
 * @param {React.Ref} ref - The ref object used to access the underlying ReactQuill component.
 * @returns {JSX.Element} The rendered Editor component.
 */
import React from 'react'
import { forwardRef, useEffect, useRef, useImperativeHandle } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


const Editor = forwardRef(({readOnly, defaultValue, onTextChange, onSelectionChange, className}, ref) => {
    const quillRef = useRef(ref)
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useEffect(() => {
        onTextChangeRef.current = onTextChange;
        onSelectionChangeRef.current = onSelectionChange;
    })

    useImperativeHandle(ref, () => ({
        getEditor: () => {
            return quillRef.current.getEditor();
        }
    }))
    
    return (
        <ReactQuill
            ref={quillRef}
            readOnly={readOnly}
            defaultValue={defaultValue}
            onChange={(content, delta, source, editor) => {
                if (onTextChangeRef.current) {
                    onTextChangeRef.current(content, delta, source, editor)
                }
            }}
            onSelectionChange={(range, source, editor) => {
                if (onSelectionChangeRef.current) {
                    onSelectionChangeRef.current(range, source, editor)
                }
            }}
            className={className}
        />
    );
})

Editor.displayName = 'Editor'

export default Editor

