import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Work.scss";
import { useTheme } from "../../hooks/useTheme";
import { useDispatch, useSelector } from "react-redux";
import { ShowAllProjects } from "../../constants/main__function";
const Work = () => {
  const dispatch = useDispatch();
  const Projects = useSelector((state) => state.GetProjects.Projects);

  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);
  // const handleWorkFilter = (item) => {
  //   setActiveFilter(item);
  //   setAnimateCard([{ y: 100, opacity: 0 }]);
  //   setTimeout(() => {
  //     setAnimateCard([{ y: 0, opacity: 1 }]);
  //     if (item === "All") {
  //       setFilterWork(works);
  //     } else {
  //       setFilterWork(works.filter((work) => work.tags.includes(item)));
  //     }
  //   }, 500);
  // };

  // handle click Item

  const handleWorkFilterList = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(Projects);
      } else {
        setFilterWork(
          Projects.filter((work) => work.actor.Category.includes(item))
        );
      }
    }, 400);
  };
  useEffect(() => {
    dispatch(ShowAllProjects());
  }, [dispatch]);
  useEffect(() => {
    setFilterWork(Projects);
    //  if (activeFilter === "All") {
    //    setFilterWork(Projects);
    //  } else {
    //    setFilterWork(
    //      Projects.filter((work) => work.actor.Category.includes(activeFilter))
    //    );
    //  }
  }, [Projects]);
  const { mode } = useTheme();
  return (
    <>
      <h2 className={`head-text ${mode}`}>
        My Creative <span>Portfolio</span> <br /> Section{" "}
        {/* <span>Good Business</span>{" "} */}
      </h2>
      <div className="app__work-filter">
        {["All", "Web App", "React JS", "E-commerce"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilterList(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className={`app__work-item ${mode} app_flex`} key={index}>
            <div className="app__work-img app__flex">
              <img src={work.shareImg} alt={work.actor.ProjectName} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.actor.ViewLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [1, 0.9] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className=" app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href={work.actor.GithubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [1, 0.9] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className=" app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className={`bold-text ${mode}`}>{work.actor.ProjectName}</h4>
              <p className={`p-text ${mode}`} style={{ marginTop: 10 }}>
                {work.actor.Description.split(" ").slice(0, 30).join(" ")}...
              </p>
              <div className="mobile-links">
                <div>
                  <a href={work.actor.ViewLink}>Visit App</a>
                </div>
                <div>
                  <a href={work.actor.GithubLink}>Source code</a>
                </div>
              </div>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.actor.Category}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
