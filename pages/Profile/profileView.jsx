import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import styles from "../../styles/ProfileView.module.css";
import CeramicFunctions, { connectToSelfID, getUser } from '../../utils/ceramicFunctions';

function ProfileView() {
    const router = useRouter()
    const [user, setUser] = useState(null);
    function LetsEditProfile() {
        router.push("/Profile/profileEdit");
    }
    async function fillUserInformation() {
        let _user = await getUser();
        setUser(_user);
    }
    console.log("user is ", user);
    useEffect(() => {
        connectToSelfID();
        fillUserInformation();

    }, [])

    return (
        <>
            <Head>
                <title>Profile View</title>
                <CeramicFunctions />
            </Head>

            {user != null ? <div className={styles.view}>
                <div className={styles.view__information}>
                    userName is {user.userName}
                </div>
                <div className={styles.view__edit}>
                    <button onClick={LetsEditProfile}>Edit Profile</button>
                </div>

            </div>
                :
                <div>
                    Loading
                </div>
            }




        </>
    )
}

export default ProfileView