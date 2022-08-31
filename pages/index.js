import Head from 'next/head'
import Introduction from './Introduction';
import styles from '../styles/Home.module.css'

export default function Home() {
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
