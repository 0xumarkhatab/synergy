import React from 'react'
import styles from "../styles/InputField.module.css";

function InputField({ title, type, onChange }) {
    return (
        <div className={styles.input__field}>
            <label htmlFor={title} >{title}</label>
            <input onChange={onChange} id={title} type={type} />
        </div>
    )
}

export default InputField