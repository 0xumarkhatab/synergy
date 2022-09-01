import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import styles from "../../styles/ProfileView.module.css";
import GradientButton from '../../components/GradientButton';
import { useViewerRecord } from "@self.id/react";
import {useRouter} from "next/router"
function ProfileView(props) {
    console.log("the props in view are ", props);
    const router = useRouter()
    const [user, setUser] = useState(props.user);
    let record = useViewerRecord("basicProfile");
    function LetsEditProfile() {
        props.isEdit(true);
    }


    

 
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
                    <div className={styles.profile__name}>{props.user?.firstName} {props.user?.lastName}</div>
                    <div className={styles.profile__bio}>{props.user?.bio}</div>
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