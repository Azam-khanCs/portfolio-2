import React from "react";
import css from "./Porfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Porfolio = () => {
  return (
    <React.Fragment>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
      >
        <a id="porfolio" className="anchor"></a>
        <div className={`innerWidth flexCenter ${css.container}`}>
          <div className={`flexCenter ${css.heading}`}>
            <div>
              <span className="primaryText">My Latest Works</span>
              <p style={{ marginTop: "10px" }}>
                Perfect solution for digital experience
              </p>
            </div>
            <span className="secondaryText">Explore more work</span>
          </div>
          <div className={`flexCenter ${css.showCase}`}>
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="./showCase1.png"
              alt="project"
            />
            <motion.img
              variants={fadeIn("up", "tween", 0.6, 0.7)}
              src="./showCase2.png"
              alt="project"
            />
            <motion.img
              variants={fadeIn("up", "tween", 0.7, 0.8)}
              src="./showCase3.png"
              alt="project"
            />
          </div>
        </div>
      </motion.section>
    </React.Fragment>
  );
};

export default Porfolio;
