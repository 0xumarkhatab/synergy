import React from "react";
import styles from "../styles/PlatformStatistics.module.css";
import CircularTooltip from "./CircularTooltip";

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
          <div className={styles.platform__field__wrapper}>
              <div className={styles.platform__field__heading}>Followers</div>

            <div className={styles.platform__field}>

              <div className={styles.platform__field__list}>
              {platform.followers.slice(0,3).map((item) => {
                return (
                  <div className={styles.platform__field__list__Item}>
                    <CircularTooltip img={item.img} title={item.screen_name} />
                  </div>
                );
              })}

              </div>
              

            </div>
            <div className={styles.platform__field__more}>
            {
              
              (platform.followers.length-3) >0 && <p> + {platform.followers.length-3} more</p>
            }
            </div>
          </div>
        )}
        
        {platform.followers && (
          <div className={styles.platform__field__wrapper}>
              <div className={styles.platform__field__heading}>Following</div>

            <div className={styles.platform__field}>

              <div className={styles.platform__field__list}>
              {platform.following.slice(0,3).map((item) => {
                return (
                  <div className={styles.platform__field__list__Item}>
                    <CircularTooltip img={item.img} title={item.screen_name} />
                  </div>
                );
              })}

              </div>
              

            </div>
            <div className={styles.platform__field__more}>
            {
              
              (platform.followers.length-3) >0 && <p> + {platform.followers.length-3} more</p>
            }
            </div>
          </div>
        )}
        {platform.likes && (
          <div className={styles.platform__field__wrapper}>
              <div className={styles.platform__field__heading}>Likes</div>
            <div>{platform.likes}💖</div>
          </div>
        )}
        

        {platform.channels && (
          <div className={styles.platform__field__wrapper}>
              <div className={styles.platform__field__heading}>Channels</div>

            <div className={styles.platform__field}>

              <div className={styles.platform__field__list}>
              {platform.channels.slice(0,3).map((item) => {
                return (
                  <div className={styles.platform__field__list__Item}>
                    <CircularTooltip img={item.icon} title={item.title} />
                  </div>
                );
              })}

              </div>
              

            </div>
            <div className={styles.platform__field__more}>
            {
              
              (platform.channels.length-3) >0 && <p> + {platform.channels.length-3} more</p>
            }
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default PlatformStatistics;
