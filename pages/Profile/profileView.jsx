import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import styles from "../../styles/ProfileView.module.css";
import GradientButton from '../../components/GradientButton';
import { useViewerRecord } from "@self.id/react";

function ProfileView(props) {
    console.log("the props in view are ", props);
    const router = useRouter()
    const [user, setUser] = useState(null);
    let record = useViewerRecord("basicProfile");
    function LetsEditProfile() {
        props.isEdit(true);
    }


    async function fillUserInformation() {
        props.getUser().then(a => {
            setUser(a);

        });

    }

    useEffect(() => {
        fillUserInformation();
    }, [])

    return (
        <>
            <Head>
                <title>Profile View</title>
            </Head>
            <div className={styles.view}>
                <div className={styles.view__banner}>
                    <img src='./synergy_logo.png' />
                </div>
                <div className={styles.profile__head}>
                    <div className={styles.profile__picture}>
                        <img src="./synergy_symbol.png" alt="" />
                    </div>
                    <div className={styles.profile__edit}>
                        <GradientButton onClick={LetsEditProfile} title={"Edit"} key={"editProfile_"} />
                    </div>

                </div>
                <div className={styles.profile__information}>
                    <div className={styles.profile__name}>Umar Khatab</div>
                    <div className={styles.profile__bio}>20 | Helping people learn Web3 🚀</div>
                </div>


            </div>

            {/* {user != null ?

                <div className={styles.view__edit}>
                    <button onClick={LetsEditProfile}>Edit Profile</button>
                </div>
                :
                <div>
                    Loading
                </div>
            } */}




        </>
    )
}

export default ProfileView