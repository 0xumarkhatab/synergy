import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
import GradientButton from '../../components/GradientButton';
import ProfileView from './view';
import styles from "../../styles/Profile.module.css"

function Profile() {
    const [isWalletConnected, setIsWalletConnected] = useState(false);

    async function connectWallet() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner()
        setIsWalletConnected(true);

    }
    useEffect(() => {
        //        connectWallet();
    }, [])
    if (!isWalletConnected) {
        console.log("should connect")
    }
    return (
        <div className={styles.profile}>
            {isWalletConnected === false && <GradientButton title={"Connect Wallet"} onClick={connectWallet} />}
            {isWalletConnected && <ProfileView />}


        </div>
    )


}

export default Profile