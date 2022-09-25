import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "../../styles/ProfileView.module.css";
import GradientButton from "../../components/GradientButton";
import { useViewerRecord } from "@self.id/react";
import { useRouter } from "next/router";
import NamedIcon from "../../components/NamedIcon";
import ContactItem from "../../components/ContactItem";
import ContactMe from "../../components/ContactMe";
import PlatformStatistics from "../../components/PlatformStatistics";
import { PlatformsData,Contacts } from "../../data";
import ReactTooltip from 'react-tooltip';

function ProfileView(props) {
  console.log("the props in view are ", props);
  const router = useRouter();
  const [user, setUser] = useState(props.user);
  let record = useViewerRecord("basicProfile");
  const [showContacts, setShowContacts] = useState(false);
  const [contacts, setContacts] = useState(Contacts);
  const [platforms,setPlatforms] =useState(PlatformsData);
  function LetsEditProfile() {
    props.isEdit(true);
  }

  return (
    <>
      <Head>
        <title>Profile View</title>
      </Head>
      <div className={styles.view}>
        <div className={styles.view__banner}>
          <img src="./Synergy_logo.png" alt="Profile Banner" />
        </div>
        <div className={styles.profile__head}>
          <div className={styles.profile__picture}>
            <img src={props.user?.avatarLink} alt="Profile Picture" />
          </div>
          <div className={styles.profile__edit}>
            <GradientButton
              onClick={LetsEditProfile}
              title={"Edit Profile"}
              key={"editProfile_"}
            />
          </div>
        </div>
        <div className={styles.profile__information}>
          <div className={styles.profile__name}>
            {props.user?.firstName} {props.user?.lastName}
          </div>
          <div className={styles.profile__bio}>{props.user?.bio}</div>
          <div className={styles.profile__professional}>
            <NamedIcon
              img={"./profession.png"}
              title={props.user?.profession}
            />
            <NamedIcon img={"./location.png"} title={props.user?.location} />
            {!showContacts && (
              <NamedIcon
                isButton={true}
                onClick={() => setShowContacts(true)}
                img={"./contact.png"}
                title={"Contact"}
              />
            )}
            {showContacts && (
              <ContactMe
                contactsShowToggle={setShowContacts}
                contacts={contacts}
              />
            )}
          </div>
          <div className={styles.social__media__stats}>
            {
              platforms.map((item)=>{

                return <PlatformStatistics key={"plt"+item.title} platform={item} />
              })
            }
          </div>
        </div>
      </div>

      {/* {user != null ?

                <div className={styles.view__edit}>
                    <button onClick={LetsEditProfile}>Edit Profile</button>
                </div>
                :
                <div>
                    Loading
                </div>
            } */}
    </>
  );
}

export default ProfileView;
