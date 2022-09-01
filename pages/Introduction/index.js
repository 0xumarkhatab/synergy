import React, { useState } from 'react'
import styles from "../../styles/Introduction.module.css";
import { ethers } from "ethers";
import Shape from '../../components/Shape';
import Link from 'next/link';
import { useRouter } from 'next/router'

import GradientButton from '../../components/GradientButton';
function Introduction() {

        const [Loading,setLoading] = useState(false);
        const router = useRouter();

            function navigate(){
                router.push("/Profile");
                setLoading(false);
            }
    return (
        <div className={styles.introduction}>
            <div className={styles.introduction__title}>
                Unify <p className={styles.gradient}> your identity</p>
            </div>
            <div className={styles.introduction__description}>
                Synergy is all about bringing your all social media assets and reputation at one place
            </div>
            <div className={styles.action__button}>
                    <GradientButton title={Loading? "Navigating": "Get Started"} onClick={()=>{ setLoading(true); setTimeout(() => {
                        navigate();
                    }, 2000); }} isCenter={true} />         
            </div>

            <Shape link={'https://assets.website-files.com/5fa9a68799d2454eeced93d7/5fab2bf215209297ab1c457d_agifcolossalsphere2.gif'} />



        </div>

    )
}

export default Introduction