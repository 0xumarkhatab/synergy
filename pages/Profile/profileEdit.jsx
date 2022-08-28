import React, { useState } from 'react'
import Head from 'next/head'
import Link from "next/link";
import { useRouter } from 'next/router'

import GradientButton from '../../components/GradientButton';
import InputField from '../../components/InputField';
import styles from "../../styles/ProfileEdit.module.css";
import CeramicFunctions, { updateUser } from '../../utils/ceramicFunctions';

function ProfileEdit() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [avatarLink, setAvatarLink] = useState('')
    const [discordLink, setDiscordLink] = useState('')
    const [twitterLink, setTwitterLink] = useState('')
    const [githubLink, setGithubLink] = useState('')
    const router = useRouter()

    async function saveChanges() {
        const user = {
            firstName, lastName, userName, email, avatarLink, discordLink, twitterLink, githubLink
        }
        console.log("user is ", user)
        await updateUser(user);
        router.push("/Profile/profileView");
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
                <InputField onChange={(e) => setFirstName(e.target.value)} id="FirstName" key="FirstName" title={"First Name"} type="text" />
                <InputField onChange={(e) => setLastName(e.target.value)} id="Last Name" key="LastName" title={"Last Name"} type="text" />
                <InputField onChange={(e) => setUserName(e.target.value)} id="User Name" key="UserName" title={"User Name"} type="text" />
                <InputField onChange={(e) => setEmail(e.target.value)} id="Email" key="Email" title={"Email"} type="text" />
                <InputField onChange={(e) => setAvatarLink(e.target.value)} id="AvatarLink" key="AvatarLink" title={"Avatar Link"} type="text" />

                <InputField onChange={(e) => setDiscordLink(e.target.value)} id="DiscordLink" key="DiscordLink" title={"Discord Link"} type="text" />
                <InputField onChange={(e) => setTwitterLink(e.target.value)} id="TwitterLink" key="TwitterLink" title={"Twitter Link"} type="text" />
                <InputField onChange={(e) => setGithubLink(e.target.value)} id="GithubLink" key="GithubLink" title={"Github Link"} type="text" />
                <CeramicFunctions />

                <GradientButton onClick={saveChanges} isCenter={true} title={"Save Changes"} key={"save"} />




            </div>

        </div>
    )
}

export default ProfileEdit