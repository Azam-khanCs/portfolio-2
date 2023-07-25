import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
const Hero = () => {
  return (
    <React.Fragment>
      <section className={`paddings ${css.wrapper}`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={` innerWidth ${css.container}`}
        >
          <div className={css.upperElement}>
            <motion.span
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="primaryText"
            >
              Hey There, <br /> I'm Azam Khan.
            </motion.span>
            <motion.span
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="secondaryText"
            >
              I design beautiful simple <br /> things, And I love what i do
            </motion.span>
          </div>

          {/*person image*/}
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person}
          >
            <motion.img
              variants={slideIn("up", "tween", 0.3, 1)}
              src="./azam1.png"
              className="azam"
              alt=""
            />
          </motion.div>

          {/*person email*/}
          <a
            className={css.email}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=azamkhangl805@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            azamkhangl805@gmail.com
          </a>

          <div className={css.lowerElement}>
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className={css.experience}
            >
              <div className="primaryText">10</div>
              <div className="secondaryText">
                <div>Years</div>
                <div>Experience</div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className={css.certificate}
            >
              <img src="./certificate.png" alt="" width={50} />
              <div>
                <span>CERTIFIED PROFATIONAL</span>
                <span>UI/UX DESIGNER</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
