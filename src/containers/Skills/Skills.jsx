import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { useTheme } from "../../hooks/useTheme";
import { skillsarr, SkillsYears } from "./SkillsarrFile";
const Skills = () => {
 
  const { mode } = useTheme();
  return (
    <>
      <h2 className={`head-text ${mode}`}>Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skillsarr?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={`app__skills-item ${mode} app__flex`}
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className={`p-text ${mode}`}>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {SkillsYears?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className={`bold-text ${mode}`}>{experience.year}</p>
                <span className={`bold-text ${mode}`}>{experience.text}</span>
              </div>
     
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
