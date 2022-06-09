import React from "react"
import Image from "./components/Image"
import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"

function MainContent() {
  return (
    <div className="main-content">
      <Info />
      <About />
    </div>
  )
}

export default function DigitalBusinessCard() {
    return (
      <div>
        <Image />
        <MainContent />
        <Footer />
      </div>
  )
}

