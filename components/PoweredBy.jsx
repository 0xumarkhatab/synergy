import React from 'react'
import styles from "../styles/PoweredBy.module.css"
function PoweredBy() {
  return (
    <div className={styles.poweredBy}>
      <div className={styles.heading}>Powered By</div>
      <div className={styles.companies}>
        <img src="./learnweb3.png" alt={"Learn Web3 DAO Logo"}/>
        <img src="https://assets.website-files.com/5fa9a68799d2454eeced93d7/600b22445b7c725b1c42a93b_logo-ceramic-full.png" alt="Ceramic Network" />
        <img src="https://blog.vpscheap.net/wp-content/uploads/2017/11/ether.png" alt="Ethereum Logo" />
        <img src="https://pbs.twimg.com/media/FAXymZJXIAkERod.jpg" alt="Next JS logo" />

        
      </div>
      
    </div>
  )
}

export default PoweredBy
