import React from 'react'
import { Web3Provider } from "@ethersproject/providers"
import { useEffect, useRef, useState } from "react"
import { useViewerConnection } from "@self.id/react";
import { EthereumAuthProvider } from "@self.id/web";
import { useViewerRecord } from "@self.id/react";

import Web3Modal from "web3modal"

let web3ModalRef;
let Connect, record;

export const updateUser = async (user) => {
    let anotherUser = { ...user }
    await record.merge({
        user: anotherUser
    });

    alert("information saved")
};
export const getUser = async (user) => {
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
    return new EthereumAuthProvider(wrappedProvider.provider, address);
};

export const connectToSelfID = async () => {
    try {
        const ethereumAuthProvider = await getEthereumAuthProvider();
        Connect(ethereumAuthProvider);
    }
    catch (err) {
        return false;

    }
    return true;

};

function CeramicFunctions() {
    const [connection, connect, disconnect] = useViewerConnection();
    record = useViewerRecord("basicProfile");


    Connect = connect;
    web3ModalRef = useRef();

    useEffect(() => {
        if (connection.status !== "connected") {
            web3ModalRef.current = new Web3Modal({
                network: "rinkeby",
                providerOptions: {},
                disableInjectedProvider: false,
            });
        }
        else {
            console.log("DID is connected");
        }
    }, [connection.status]);

    return (
        <></>
    )

}

export default CeramicFunctions