import React from "react";
import css from "./Experties.module.scss";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import NumberCounter from "number-counter";

const Experties = () => {
  return (
    <React.Fragment>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={css.wrapper}
      >
        <a id="experties" className="anchor"></a>
        <div
          className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
        >
          <div className={css.leftside}>
            {projectExperience.map((exp, index) => {
              return (
                <motion.div
                  variants={fadeIn("right", "tween", (index + 1) * 0.2, 1)}
                  className={css.exp}
                  key={index}
                >
                  <div className="flexCenter" style={{ background: exp.bg }}>
                    <exp.icon size={25} color="white" />
                  </div>
                  <div>
                    <sapn>{exp.name}</sapn>
                    <sapn className="secondaryText">
                      {exp.projects} Project
                    </sapn>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div variants={textVariant(0.8)} className={css.rightside}>
            <span className="primaryText">What do I help?</span>
            {WhatDoIHelp.map((paragraph, index) => {
              return (
                <span className="secondaryText" key={index}>
                  {paragraph}
                </span>
              );
            })}
            <div className={`flexCenter ${css.stats}`}>
              <div className={`flexCenter ${css.stat}`}>
                <span className="primaryText">
                  <NumberCounter start={50} end={120} delay={3} postFix="+" />
                </span>
                <span className="secondaryText">Projects Completed</span>
              </div>
              <div className={`flexCenter ${css.stat}`}>
                <span className="primaryText">
                  <NumberCounter start={130} end={180} delay={5} postFix="+" />
                </span>
                <span className="secondaryText">Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </React.Fragment>
  );
};

export default Experties;
