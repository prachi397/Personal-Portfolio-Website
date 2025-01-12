import React from "react";
import "./homePage.css";
import myImage from "../../images/myImage.jpeg";
import About from "../about/About";

const HomePage = () => {
  const name = "Prachi Panwar";
  return (
    <div className="homePage">
    <div className="my-portfolio">
      <div className="about-section" id="home">
        <h3>Hi, my name is</h3>
        <h1>{name}</h1>
        <p>
          I am a dedicated and results-driven Frontend Developer with over 2
          years of professional experience, specializing in building
          responsive, user-centric web applications. Proficient in modern
          technologies like React.js, Redux, JavaScript, and CSS, I have a
          proven track record of enhancing and modernizing user interfaces to
          deliver seamless user experiences.
        </p>
      </div>
      <div className="img-section">
        <img src={myImage} alt="my image" className="my-img" />
      </div>
    </div>
    <About/>
    </div>
  );
};
export default HomePage;
