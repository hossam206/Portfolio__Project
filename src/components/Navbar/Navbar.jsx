import React, { useState } from "react";
import "./Navbar.scss";
import modeIcon from "../../assets/sun.svg";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import "../Login/Login.scss";

import { IoClose } from "react-icons/io5";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../constants/firebase";
import { postProject } from "../../constants/main__function";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const { changeMode, mode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  const [LoginForm, setLogin] = useState(false);
  const showLogin = (e) => {
    e.preventDefault();
    setLogin(!LoginForm);
  };

  const [PostProject, setPostProject] = useState(false);
  const showPostProject = () => {
    setPostProject(!PostProject);
  };

  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const allowedEmail = "hossammohamed6401@gmail.com";
  const allowedPassword = "Hosam@0111";
  const [wrong, setwrong] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (userName === allowedEmail && password === allowedPassword) {
      try {
        await signInWithEmailAndPassword(auth, userName, password);
        setLogin(false);
        setUserName("");
        setpassword("");
        setPostProject(true);
        // Redirect to dashboard or another page
      } catch (error) {
        alert(error.message);
      }
    } else {
      setUserName("");
      setpassword("");
      setwrong("Invalid email or password.");
    }
  };
  // take inputs from Post Project Form
  const [ProjectName, setProjectName] = useState("");
  const [ProjectCategory, setProkectCategory] = useState("");
  const [ProjectLink, setProjectLink] = useState("");
  const [ProjectDescription, setProjectDescription] = useState("");
  const [ProjectGithub, setProjectGithub] = useState("");
  const [Imagesrc, setImagesrc] = useState("");
  // get image from files
  const HandleUploadImage = (e) => {
    const Imagefile = e.target.files[0];
    if (Imagefile === undefined || "") {
      alert("enter valid images");
    } else {
      setImagesrc(Imagefile);
    }
  };

  // create reset function
  const reset = (e) => {
    setImagesrc("");
    setProjectName("");
    setProkectCategory("");
    setProjectLink("");
    setProjectDescription("");
    setProjectGithub("");
  };
  // send upload to function
  const handlePost = (e) => {
    e.preventDefault();
    // create payload object
    const payload = {
      image: Imagesrc,
      Name: ProjectName,
      Category: ProjectCategory,
      Link: ProjectLink,
      Description: ProjectDescription,
      Github: ProjectGithub,
    };
    dispatch(postProject(payload));
    reset(e);
  };
  return (
    <div>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          {/* <img src={logo} alt="logo" /> */}
          <h3 className="app__logo">Hossam Mohamed</h3>
        </div>
        <ul className={`app__navbar-links ${mode}`}>
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li className={`app__flex  p-text ${mode}`} key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
          <li>
            <div className={`mode-toggle `}>
              <img
                onClick={(e) => toggleMode()}
                style={{
                  filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
                }}
                src={modeIcon}
                alt="..."
              />
            </div>
          </li>
        </ul>
        <div className={`app__navbar-menu ${mode} `}>
          <HiMenuAlt4 onClick={(e) => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul className={`app__navbar-links ${mode}`}>
                {[
                  "home",
                  "about",
                  "work",
                  "skills",
                  "Testimonials",
                  "contact",
                ].map((item) => (
                  <li key={`${item}`}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}

                <li>
                  <span className="mode-toggle">
                    <img
                      onClick={(e) => toggleMode()}
                      style={{
                        filter: mode === "dark" ? "invert(50%)" : "invert(20%)",
                      }}
                      src={modeIcon}
                      alt="..."
                    />
                  </span>
                </li>
                <li>
                  <a
                    href="#"
                    className="Post__Project"
                    onClick={(e) => showLogin(e)}
                  >
                    Post New Projct
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
        <a href="#" className="Post__Project LargeScreen" onClick={(e) => showLogin(e)}>
          Post New Projct
        </a>
      </nav>
      {LoginForm && (
        <div className="Login">
          <div className="Login__Content">
            <div className="LoginHead">
              <p>Welocme Back !</p>
              <IoClose onClick={showLogin} />
            </div>
            <form onSubmit={handlesubmit}>
              <div>
                <label>UserName</label>
                <input
                  type="text"
                  placeholder="Enter Your UserName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <p className="WrongMessage">{wrong}</p>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
      {PostProject && (
        <div className="PostProject">
          <div className="PostprojectContent">
            <div className="PostProjectHead">
              <h3>Post Your New Project</h3>
              <IoClose onClick={showPostProject} />
            </div>
            <div className="ProjectContent">
              <form onSubmit={handlePost}>
                <div>
                  <label>Project Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Project Name"
                    value={ProjectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <div>
                  <label>Project Category</label>
                  <input
                    type="text"
                    placeholder="Enter Your Project Category"
                    value={ProjectCategory}
                    onChange={(e) => setProkectCategory(e.target.value)}
                  />
                </div>
                <div>
                  <label>Project Description</label>
                  <input
                    type="text"
                    placeholder="Enter Your Project Description"
                    value={ProjectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                </div>
                <div>
                  <label>Project image</label>
                  <input
                    type="file"
                    placeholder="Enter Your Project image "
                    onChange={HandleUploadImage}
                  />
                </div>
                <div>
                  <label>Project Link</label>
                  <input
                    type="text"
                    placeholder="Enter Your Project Link"
                    value={ProjectLink}
                    onChange={(e) => setProjectLink(e.target.value)}
                  />
                </div>
                <div>
                  <label>Project Github</label>
                  <input
                    type="text"
                    placeholder="Enter Your Project GitHub Link"
                    value={ProjectGithub}
                    onChange={(e) => setProjectGithub(e.target.value)}
                  />
                </div>
                <button>Post</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
