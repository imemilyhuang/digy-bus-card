import React from "react"
import TwitterIcon from "../images/twitter-icon.png"
import FacebookIcon from "../images/facebook-icon.png"
import InstagramIcon from "../images/instagram-icon.png"
import GithubIcon from "../images/github-icon.png"

export default function Footer() {
    return (
        <div className="footer-format">
            <a href="https://twitter.com/imemilyhuang">
                <img src={TwitterIcon} />
            </a>

            <a>
                <img src={FacebookIcon} />
            </a>

            <a href="https://www.instagram.com/imemilyhuang/">
                <img src={InstagramIcon} />
            </a>

            <a href="https://github.com/imemilyhuang">
                <img src={GithubIcon} />
            </a>
        </div>
    )
}