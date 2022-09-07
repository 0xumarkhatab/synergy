import React from 'react'
import styles from "../../styles/Introduction.module.css";
import Shape from '../../components/Shape';
import About from './About';
function Introduction() {

        
    return (
        <div className={styles.introduction}>
            <div className={styles.introduction__title}>
                Unify <p className={styles.gradient}> your identity</p>
            </div>
            <div className={styles.introduction__description}>
                Synergy is about bringing all your 
                Digital Assets at one place including Social Media Reputation , NFTs and much more  
            </div>

            <Shape link={'https://assets.website-files.com/5fa9a68799d2454eeced93d7/5fab2bf215209297ab1c457d_agifcolossalsphere2.gif'} />
            <About />


        </div>

    )
}

export default Introduction