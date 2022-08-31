import React from 'react'
import styles from "../styles/InputField.module.css";

function InputField({ title, type, onChange, disabled, value, ref, placeholder }) {
    return (
        <div className={`${styles.input__field} ${disabled == true ? 'disabled' : ''}`}>
            <label htmlFor={title} >{title}</label>
            <input placeholder={placeholder ? placeholder : ''} value={value != undefined ? value : ''} disabled={disabled} onChange={onChange} id={title} type={type} />
        </div>
    )
}

export default InputField