import React, { useState } from "react";
import PrimaryButton from "../../components/PrimaryNote";
import styles from "../../styles/About.module.css";
import { useRouter } from "next/router";
import GradientButton from "../../components/GradientButton";
function About() {
  const [Loading, setLoading] = useState(false);
  const router = useRouter();

  function navigate() {
    router.push("/Profile");
    setLoading(false);
  }
  return (
    <div className={styles.about}>
      <div className={styles.about__content}>
        <div className={styles.header}>
          <img src="./Synergy_symbol.png" alt="synergy_logo"  />
          <h3>Synergy</h3>
          <PrimaryButton
            title={"Beta version"}
            disabled={true}
            size="sm"
            key={"betaButton"}
          />
        </div>
        <div className={styles.content}>
          <h3>Decentralized way to combine your digital assets</h3>
          <p>
            {" "}
            Synergy is Willing to bring you one step closer to Metaverse By
            providing a Decentralized Platform where all of your digital assets
            can live. It brings the security and decentralization benefits of
            blockchain providing the comprehensive look of your digital presence
            and assets like Social media Followers , NFTs located on multiple
            blockchains and much more.
          </p>
          <GradientButton
            title={Loading ? "Navigating" : "Get Started"}
            
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                navigate();
              }, 200);
            }}
          />
        </div>
      </div>
      <div className={styles.illustration}></div>
    </div>
  );
}

export default About;
