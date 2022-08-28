import '../styles/globals.css'
import Navbar from './Navbar'
import { Provider } from '@self.id/react';

function MyApp({ Component, pageProps }) {
  return <Provider client={{ ceramic: "testnet-clay" }}><Navbar /><Component {...pageProps} /></Provider>
}

export default MyApp
