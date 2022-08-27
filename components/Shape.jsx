import React from 'react'

function Shape({ link }) {
    return (
        <div style={{
            height: "100vh",
            objectFit: "contain",
            display: "flex",
            justifyContent: "center"

        }}> <img src={link} /></div>
    )
}

export default Shape