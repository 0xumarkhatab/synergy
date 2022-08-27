import React from 'react'
import styles from "../styles/Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__left}>
                <div className={styles.navbar__left__logo}>
                    <img src='./synergy_icon.png' />
                </div>

            </div>
            <div className={styles.navbar__center}>
                <p>Synergy <img src='./down.png' /> </p>
                <p>Synergy Labs <img src='./down.png' /></p>
                <p className={styles.highlight}>We're Building</p>

            </div>
            <div className={styles.navbar__right}>
            </div>


        </div>

    )
}

export default Navbar