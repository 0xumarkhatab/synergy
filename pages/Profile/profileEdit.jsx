import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from "next/link";
import { useRouter } from 'next/router'

import GradientButton from '../../components/GradientButton';
import InputField from '../../components/InputField';
import styles from "../../styles/ProfileEdit.module.css";
import { useViewerRecord } from '@self.id/react';
function ProfileEdit(props) {
    console.log("props in edit  are ", props);

    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState(props.user?.firstName)
    const [lastName, setLastName] = useState(props.user?.lastName)
    const [userName, setUserName] = useState(props.user?.userName)
    const [bio, setBio] = useState(props.user?.bio)
    const [portfolio, setPortfolio] = useState(props.user?.portfolio)
    const [location, setLocation] = useState(props.user?.location)
    const [profession, setProfession] = useState(props.user?.profession)
    const [email, setEmail] = useState(props.user?.email)
    const [avatarLink, setAvatarLink] = useState(props.user?.avatarLink)
    const [discordId, setDiscordId] = useState(props.user?.discordId)
    const [githubId, setGithubId] = useState(props.user?.githubId)
    const [twitterId, setTwitterId] = useState(props.user?.twitterId)
    const [linkedinn, setLinkedinn] = useState(props.user?.linkedinn)
    let user = props.user;

    const router = useRouter()

    async function saveChanges() {
        const _user = {
            firstName, lastName, userName, email, avatarLink, discordId, twitterId, githubId, bio,
            followers: [{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' }],
            following: [{ name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' }]

        }
        await props.updateUser(_user);

        props.isEdit(false);
    }

   
   
    if (loading) {
        return (
            <div className={styles.edit__center}>
                Loading
            </div>
        )
    }

    return (
        <div className={styles.edit}>
            <Head>
                <title>Profile Edit</title>
            </Head>

            <div className={styles.profile__heading}>
                Profile Edit
            </div>
            <div className={styles.edit__form}>

                <InputField onChange={(e) => setFirstName(e.target.value)} value={firstName} id="FirstName" key="FirstName" title={"First Name"} type="text" />
                <InputField onChange={(e) => setLastName(e.target.value)} value={lastName} id="Last Name" key="LastName" title={"Last Name"} type="text" />
                <InputField onChange={(e) => setUserName(e.target.value)} value={userName} id="User Name" key="UserName" title={"User Name"} type="text" />
                <InputField onChange={(e) => setBio(e.target.value)} value={bio} id="Bio" key="Bio" title={"Bio"} type="text" />

                <InputField onChange={(e) => setEmail(e.target.value)} value={email} id="Email" key="Email" title={"Email"} type="text" />
                <InputField onChange={(e) => setProfession(e.target.value)} value={profession} id="Profession" key="Profession" title={"Profession"} type="text" />
                <InputField onChange={(e) => setLocation(e.target.value)} value={location} id="Location" key="Location" title={"Location"} type="text" />
                <InputField onChange={(e) => setPortfolio(e.target.value)} value={portfolio} id="Portfolio" key="Portfolio" title={"Portfolio"} type="text" />
                <InputField onChange={(e) => setAvatarLink(e.target.value)} value={avatarLink} id="AvatarLink" key="AvatarLink" title={"Avatar Link"} type="text" />
                <InputField onChange={(e) => setDiscordId(e.target.value)} value={discordId} id="discordId" key="discordId" title={"Discord ID "} type="text" />
                <InputField onChange={(e) => setTwitterId(e.target.value)} value={twitterId} id="TwitterId" key="TwitterId" title={"Twitter ID"} type="text" />
                <InputField onChange={(e) => setGithubId(e.target.value)} value={githubId} id="githubId" key="githubId" title={"Github Id"} type="text" />

                <GradientButton onClick={saveChanges} isCenter={true} title={loading?"Saving Changes" : "Save Changes"} key={"save"} />




            </div>

        </div>
    )
}

export default ProfileEdit