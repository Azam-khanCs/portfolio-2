import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";

const Footer = () => {
  return (
    <React.Fragment>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
      >
        <motion.div
          variants={footerVariants}
          className={`innerWidth yPaddings flexCenter ${css.container}`}
        >
          <div className={css.leftSide}>
            <span className="primaryText">
              Let's make something <br />
              amazing together.
            </span>
            <span className="primaryText">
              Start by{" "}
              <a
                className={css.email}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=azamkhangl805@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                saying hi
              </a>
            </span>
          </div>
          <div className={css.rightSide}>
            <div className={css.info}>
              <span className="secondaryText">Information</span>
              <p>islamabad 1245 3445 454</p>
            </div>
            <div className={css.menu}>
              <li>Services</li>
              <li>Works</li>
              <li>Notes</li>
              <li>Experience</li>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </React.Fragment>
  );
};

export default Footer;
