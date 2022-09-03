import React from 'react'
import styles from "../styles/ContactMe.module.css";
import ContactItem from './ContactItem';
import GradientButton from './GradientButton';

function ContactMe({contacts,contactsShowToggle}) {
  return (
    <div className={styles.contact__me}>
    <div className={styles.contact__me__header}>
        <h3></h3>
        <GradientButton title={"Close"} onClick={()=>contactsShowToggle(prev=>!prev)} />
    </div>
      
    <div className={styles.contact__me__list}>
        

        {contacts.map((item)=>{
            return <ContactItem key={"item "+item} item={item}/>
        })
        }
      </div>
    
      
    
    </div>

  )
}

export default ContactMe
