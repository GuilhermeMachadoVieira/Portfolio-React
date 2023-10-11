import React from 'react';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev, faConnectdevelop, faCodepen } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importante para correta estilização dos ícones

export default function WhatIDoSection(nome,) {
  return (
    <div id="secaoServices">
      <div class="title">What i do</div>
      <div className="containerIDo">
        <div className="block-holder">
        <FontAwesomeIcon icon={faConnectdevelop} className="icone" style={{ color: "#27ae60", fontSize: "54px" }} />
          <p className="ido">Software<br /> Development</p>
        </div>
        <div className="block-holder">
        <FontAwesomeIcon icon={faDev} className="icone" style={{ color: "#27ae60", fontSize: "54px" }} />
          <p className="ido">Web<br /> Development</p>
        </div>
        <div className="block-holder">
        <FontAwesomeIcon icon={faCodepen} className="icone" style={{ color: "#27ae60", fontSize: "54px" }} />
          <p className="ido">Web<br /> Design</p>
        </div>
      </div>
    </div>
  );
}