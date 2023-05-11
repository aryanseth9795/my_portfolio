import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import aryan from "../assets/aryan.jpg";
import "../styles/Home.css";
import Typed from "react-typed";
function Home() {
  return (
    <div className="home">
      <div className="about">
     <img id ="pic"src={aryan} alt={"pic"}/>
        <h2> Hi, My Name is Aryan Seth</h2>
        <div className="prompt">
          <p id="run"><Typed
          strings={[
            "I'm a Full Stack Developer",
            "I Love Software Development",
            "I'm a Coder",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
        /></p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
          <InstagramIcon />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
