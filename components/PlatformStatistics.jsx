import React from "react";
import styles from "../styles/PlatformStatistics.module.css";

function PlatformStatistics({ platform }) {
  console.log("platform ", platform);
  return (
    <div className={styles.platform__statistics}>
      <div className={styles.platform__title}>
        <img src={platform.icon} alt={platform.title} />
        <h3 className={styles.platfrom__heading}>{platform.title}</h3>
      </div>
      <div className={styles.platform__numbers}>
        {platform.followers && (
          <div className={styles.platform__followers}>
            {platform.followers.length} Followers
          </div>
        )}

        {platform.following && (
          <div className={styles.platform__following}>
            {platform.following.length} Following
          </div>
        )}
        {platform.likes && (
          <div className={styles.platform__likes}>{platform.likes} Likes</div>
        )}

        {platform.channels && (
          <div className={styles.platform__channels}> Channels </div>
        )}
      </div>
    </div>
  );
}

export default PlatformStatistics;
