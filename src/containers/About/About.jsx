import React from "react";

import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

import { useTheme } from "../../hooks/useTheme";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import frontendimg from "../../assets/front-end.png";
const About = () => {
  const { mode } = useTheme();



  return (
    <>
      <h2 className={`head-text ${mode}`}>
        I Know that <span>Clean Code</span> <br /> means{" "}
        <span>Good Developer</span>{" "}
      </h2>
      <div className="app__profiles">
        <Row>
          <Col lg={8} md={6}>
            <div className="Who__im">
              <h2>Who iam</h2>
              <p  >
                Hello! I'm Hossam Mohamed Mabrook, a passionate Front-End
                Developer specializing in React. With a strong foundation in
                building and maintaining responsive web applications, I excel at
                optimizing application performance and handling bugs
                efficiently. I have a robust portfolio of 25+ successful
                projects, showcasing my ability to tackle complex problems and
                deliver user-friendly solutions. My technical skills include
                React.js, Redux Toolkit, Hooks, React Router, Styled Components,
                CSS Modules, Tailwind CSS, SASS, Bootstrap, Material UI, HTML5,
                CSS3, JavaScript (ES6+), and TypeScript. Additionally, I am
                proficient in using tools like GitHub, Framer Motion, and
                Firebase, and I have extensive experience working with RESTful
                APIs. I pride myself on my excellent problem-solving skills,
                strong communication, and teamwork abilities. I am always eager
                to contribute to dynamic projects and continuously learn new
                technologies to stay at the forefront of web development. Feel
                free to adjust or personalize it further to match your style and
                preferences!
              </p>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="front__end">
              <div className="Front_end_img">
                <img src={frontendimg} alt="about_img" />
              </div>
              <div className="front__end__details">
                <h3>Frontend Developer</h3>
                <p>
                  I am a Frontend developer with the passion of creating
                  beautiful and functional web apps
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
