import { useState } from 'react'
import Head from 'next/head'
import GradientButton from '../components/GradientButton';
import Introduction from './Introduction';
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'
import { ethers } from "ethers";
import Profile from './Profile';



export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  async function connectWallet() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    alert("Connected 🎉 ");

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Synergy</title>
        <link rel="icon" href="/synergy_symbol.png" />
      </Head>
      <Introduction />
    </div>
  )
}
