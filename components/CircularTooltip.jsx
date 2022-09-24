import React, { useState } from "react";
import styles from "../styles/CircularTooltip.module.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

function CircularTooltip({ img, title }) {
  const [tooltip, showTooltip] = useState(true);

  return (
    <div className={styles.circular__tooltip}>
      <Tippy content={title}>
        <img src={img} alt={title}  />
      </Tippy>
    </div>
  );
}

export default CircularTooltip;
