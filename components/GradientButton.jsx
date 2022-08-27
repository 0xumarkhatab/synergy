import React from 'react'
import styles from "../styles/GradientButton.module.css";

function GradientButton({ onClick, isCenter, title }) {
    return (
        isCenter === true ?
            <div className={`${styles.centered} ${styles.gradient__button}`}>
                <button onClick={onClick} >{title}</button>
            </div>
            :
            <div className={styles.gradient__button}>
                <button onClick={onClick} >{title}</button>
            </div>

    )
}

export default GradientButton