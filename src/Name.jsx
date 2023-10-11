import React from "react";
import "./style.css";
import ImagePrincipal from "./assets/imageMain.jpg";
import CVFile from "./assets/cv.pdf"

export default function Name() {
  return (
    <div className="info">
      <div>
        <h1 className="name">
          Hi, I am <br />Guilherme Vieira
        </h1>
        <h3 className="role">Frontend Developer</h3>
        <div>
          <a href={CVFile} download="Guilherme_Vieira_CV.pdf">
            <button className="download">Download CV</button>
          </a>
          <a href={CVFile} target="_blank" rel="noopener noreferrer">
            <button className="learn">Learn More</button>
          </a>
        </div>
      </div>
      <div className="borderB">
        <img src={ImagePrincipal} className="ImagePrincipal" alt="Main" />
      </div>
    </div>
  );
}