import React from 'react'
import styles from "../../styles/Introduction.module.css";
import { ethers } from "ethers";

function Introduction() {

    return (
        <div className={styles.introduction}>
            <div className={styles.introduction__title}>
                Unify <p className={styles.gradient}> your Identity</p>
            </div>
            <div className={styles.introduction__description}>
                Synergy is all about bringing your all social media reputation at one place
            </div>


        </div>

    )
}

export default Introduction