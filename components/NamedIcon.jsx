import React from 'react'
import styles from "../styles/NamedIcon.module.css"
function NamedIcon({img,title,isButton,onClick}) {
  
    let content = title ?<div className={styles.named__icon}>   
        <img src={img} alt={title} />
       {
        isButton? <button className={styles.btn} onClick={onClick}>{title}</button>: 
        <p>{title}</p>

       }
       
     </div>: <></>
 
    return content;
}

export default NamedIcon
