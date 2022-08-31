import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'

import { ethers } from "ethers";
import GradientButton from '../../components/GradientButton';
import ProfileView from './profileView';
import styles from "../../styles/Profile.module.css"
import ProfileEdit from './profileEdit';
import Web3Modal from "web3modal"
import { Web3Provider } from "@ethersproject/providers"
import { EthereumAuthProvider } from "@self.id/web";
import { useViewerRecord, useViewerConnection } from '@self.id/react';
function Profile() {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [profileEditState, setProfileEditState] = useState(false);
    const [connection, connect, disconnect] = useViewerConnection();
    const [user, setUser] = useState({});
    const web3ModalRef = useRef();
    let record = useViewerRecord("basicProfile");

    /*
    Ceramic Part
  
  */


    async function updateUser(user) {
        let anotherUser = { ...user }
        await record.merge({
            user: anotherUser
        });

        alert("information saved")

    };
    async function getUser() {
        return record?.content?.user;


    };





    const getProvider = async () => {

        const provider = await web3ModalRef.current.connect();
        const wrappedProvider = new Web3Provider(provider);
        return wrappedProvider;
    }
    const getEthereumAuthProvider = async () => {
        const wrappedProvider = await getProvider();
        const signer = wrappedProvider.getSigner();
        const address = await signer.getAddress();

        let authProvider = new EthereumAuthProvider(wrappedProvider.provider, address);
        console.log(authProvider);
        return authProvider;
    };
    const connectToSelfID = async () => {
        try {
            const ethereumAuthProvider = await getEthereumAuthProvider();
            connect(ethereumAuthProvider);

        }
        catch (err) {
            return false;

        }
        return true;

    };

    /* Ceramic part ended */




    useEffect(() => {
        console.log("connection status is ", connection.status)
        if (connection.status !== "connected") {
            console.log("not connected")
            web3ModalRef.current = new Web3Modal({
                network: "goerli",
                providerOptions: {},
                disableInjectedProvider: false,
            });


        }
        if (connection.status === "connected") {
            console.log("DID is connected");
            let a;
            getUser().then(a => {
                console.log("user is ", a);
                setUser(a);

            });


        }
        else {
            console.log("DID is not connected")
        }


    }, [connection.status]);


    return (
        <div className={styles.profile}>
            <Head>
                <title>Profile Access</title>
            </Head>
            {isWalletConnected === false && <GradientButton title={"Connect Wallet"} onClick={() => { connectToSelfID(); setIsWalletConnected(true) }} />}
            {(profileEditState && isWalletConnected) && <ProfileEdit isEdit={setProfileEditState} user={user} getUser={getUser} updateUser={updateUser} />}
            {(!profileEditState && isWalletConnected) && <ProfileView isEdit={setProfileEditState} getUser={getUser} />}


        </div>
    )


}

export default Profile