import React from "react";

import localStyles from "../styles/PrimaryNote.module.css";

function PrimaryNote({ title }) {
  return (
    <div className={localStyles.main}>
      <button disabled={true}>{title}</button>
    </div>
  );
}

export default PrimaryNote;
