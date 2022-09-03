import React from 'react'

function Shape({ link }) {
    return (
        <div style={{
            height: "100%",
            width:"100%",
            objectFit: "contain",
            display: "flex",
            justifyContent: "center",
            userSelect: "none"

        }}> <img src={link} /></div>
    )
}

export default Shape