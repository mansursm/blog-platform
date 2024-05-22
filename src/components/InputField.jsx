/**
 * InputField component for rendering an input field.
 *
 * @component
 * @param {string} type - The type of the input field.
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {string} name - The name attribute for the input field.
 * @param {string} id - The id attribute for the input field.
 * @param {string} value - The value of the input field.
 * @param {function} onChange - The event handler for the input field's change event.
 * @returns {JSX.Element} - The rendered InputField component.
 */
import React from 'react'

function InputField({ type, placeholder, name, id, value, onChange, required}) {
    return (
        <div className="inputField">
            <input type={type} placeholder={placeholder} name={name} id={id} value={value} onChange={onChange} required={required}></input>
        </div>
    )
}

export default InputField
