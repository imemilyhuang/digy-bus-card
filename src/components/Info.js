import React from "react"
import mailIcon from "../images/mail-icon.png"
import linkedInIcon from "../images/linkedin-icon.png"

function Mail() {
    return (
        <a href="mailto:emilyhuang405@gmail.com">
        <div className="fat button-properties-1">
            <img src={mailIcon} />
            <h4 className="button-label-1">Email</h4>
        </div></a>
    )
}

function LinkedIn() {
    return (
        <a href="https://www.linkedin.com/in/imemilyhuang/">
        <div className="fat button-properties-2">
            <img src={linkedInIcon} />
            <h4 className="button-label-2">LinkedIn</h4>
        </div></a>
    )
}

function Buttons() {
    return (
        <div className="button-alignment">
            <Mail />
            <LinkedIn />
        </div>
    )
}

export default function Info() {
    return (
        <div>
            <h1>Emily Huang</h1>
            <h3>Aspiring App Developer</h3>
            <p className="website-label">emilyhuang.website</p>
            <Buttons />
        </div>
    )
}