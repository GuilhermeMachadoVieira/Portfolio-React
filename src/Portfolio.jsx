import react from "react";
import "./style.css"
import Header from "./header";
import Name from "./Name";
import About from "./About";
import Contacts from "./Contacts";
import WhatIDoSection from "./WhatIDoSection";
import Skills from  "./Skills";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";

export default function Portfolio() {
    return (
        <div className="App">
            <Header />
            <Name />
            <About />
            <Contacts />
            <WhatIDoSection />
            <Skills />
            <GetInTouch/>
            <Footer/>
        </div>
    )
}