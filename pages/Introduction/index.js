import React from 'react'
import styles from "../../styles/Introduction.module.css";
import { ethers } from "ethers";
import Shape from '../../components/Shape';
import Link from 'next/link';
import GradientButton from '../../components/GradientButton';
function Introduction({ }) {

    return (
        <div className={styles.introduction}>
            <div className={styles.introduction__title}>
                Unify <p className={styles.gradient}> your Identity</p>
            </div>
            <div className={styles.introduction__description}>
                Synergy is all about bringing your all social media reputation at one place
            </div>
            <div className={styles.action__button}>
                <Link href="/Profile">
                    <GradientButton title="Get Started" isCenter={true} />
                </Link>

            </div>

            <Shape link={'https://assets.website-files.com/5fa9a68799d2454eeced93d7/5fab2bf215209297ab1c457d_agifcolossalsphere2.gif'} />



        </div>

    )
}

export default Introduction