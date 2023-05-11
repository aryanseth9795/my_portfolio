import React from 'react'
import "../styles/skill.css";
import Typed from "react-typed";
function skills() {
    return (
        <div className="skills">
            <h1> <Typed
          strings={[
            "SKILLS",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
        /></h1>
            <ol className="list">
                <li className="item">
                    <h2> Front-End</h2>
                    <span>
                    HTML, CSS,ReactJS, , Redux,  NPM,
                        BootStrap, MaterialUI, Yarn, 
                    </span>
                </li>
                <li className="item">
                    <h2>Back-End</h2>
                    <span>
                        NodeJS,  ExpressJS, 
                        MySQL, MongoDB,  AWS S3, 
                    </span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span>JavaScript,  Python,  C, C++,</span>
                </li>
            </ol>
        </div>
    );
}
export default skills;