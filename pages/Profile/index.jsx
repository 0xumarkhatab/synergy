import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { ethers } from "ethers";
import GradientButton from '../../components/GradientButton';
import ProfileView from './profileView';
import styles from "../../styles/Profile.module.css"

import CeramicFunctions, { connectToSelfID } from '../../utils/ceramicFunctions';

function Profile() {
    const [isWalletConnected, setIsWalletConnected] = useState(false);


    async function connectToID() {
        let ifConnected = await connectToSelfID();
        setIsWalletConnected(true);
    }

    return (
        <div className={styles.profile}>
            <Head>
                <title>Profile Access</title>
            </Head>
            <CeramicFunctions />
            {isWalletConnected === false && <GradientButton title={"Connect Wallet"} onClick={connectToID} />}
            {isWalletConnected && <ProfileView />}


        </div>
    )


}

export default Profile