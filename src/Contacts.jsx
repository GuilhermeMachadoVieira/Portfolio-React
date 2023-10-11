import "./style.css"
import imgName from "./assets/name.svg";
import imgEmail from "./assets/email.svg";
import imgTwitter from "./assets/GitHub.svg";
import imgPhone from "./assets/phone.svg";



const githubLink = "https://github.com/GuilhermeMachadoVieira";

export default function Contacts() {
    return (
        <div className="fullContact">
            <div className="fullName">
                <img src={imgName} className="imgName" />
                <h1 className="typeContact">Full Name</h1>
                <h2 className="contact">Guilherme<br /> Machado Vieira</h2>
            </div>
            <div className="Email Address">
                <img src={imgEmail} className="imgEmail" />
                <h1 className="typeContact">Email Address</h1>
                <h2 className="contact">guilherme.vieira25@fatec.sp.gov.br</h2>
            </div>
            <div className="GitHub">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <img src={imgTwitter} className="imgGitHub" />
                    <h1 className="typeContact">GitHub</h1>
                    <h2 className="contact">GuilhermeMachadoVieira</h2>
                </a>
            </div>
            <div className="Phone">
                <img src={imgPhone} className="imgPhone" />
                <h1 className="typeContact">Phone</h1>
                <h2 className="contact">(15) 996215441</h2>
            </div>
        </div>
    );
}