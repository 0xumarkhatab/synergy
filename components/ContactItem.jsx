import React from 'react'
import styles from "../styles/ContactItem.module.css";

function ContactItem({item}) {
  return (
    
        item.data?<div className={styles.contact__item}>
        <h5 className={styles.heading}>{item.title}</h5>
        <p>{item.data}</p>
  
      </div>
    :<></>   
    
    
  )
}

export default ContactItem
