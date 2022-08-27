import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
import GradientButton from '../../components/GradientButton';
import ProfileView from "./view"
function Profile() {
    const [isWalletConnected, setIsWalletConnected] = useState(false);

    async function connectWallet() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner()
        setIsWalletConnected(true);

    }
    useEffect(() => {
        connectWallet();
    }, [])

    return (
        <div>
            {!isWalletConnected && <GradientButton isCenter={true} title={"Connect Wallet"} onClick={connectWallet} />}
            {isWalletConnected && <ProfileView />}


        </div>
    )


}

export default Profile