import react from "react";
import "./style.css"

export default function Skills() {
    return (
        <div>
        <div className="title">My Skills</div>
        <div className="containerSkills">
          <div className="skillItem">
            <p className="skills">25%</p>
            <p className="skillTitle">HTML</p>
          </div>
          <div className="skillItem">
            <p className="skills">30%</p>
            <p className="skillTitle">CSS</p>
          </div>
          <div className="skillItem">
            <p className="skills">40%</p>
            <p className="skillTitle">JAVASCRIPT</p>
          </div>
          <div className="skillItem">
            <p className="skills">40%</p>
            <p className="skillTitle">REACTJS</p>
          </div>
        </div>
      </div>
            )
}