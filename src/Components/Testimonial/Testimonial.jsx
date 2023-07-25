import React from "react";
import css from "./Testimonial.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import Slider from "react-slick";
import { comments, sliderSettings } from "../../utils/data";

const Testimonial = () => {
  return (
    <React.Fragment>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`padding ${css.wrapper}`}
      >
        <a id="testimonial" className="anchor"></a>
        <motion.div
          variants={footerVariants}
          className={`yPaddings innerWidth ${css.container}`}
        >
          <div className={`flexCenter ${css.heading}`}>
            <span className="primaryText">People talk about us</span>
            <p style={{ marginTop: "2rem" }}>
              I got a job that was in accordance with the salary and field of
              work
            </p>
            <p>The process of submitting an appilication was quite cosy</p>
          </div>
          <div className={`yPaddings ${css.comments}`}>
            <Slider {...sliderSettings} className={css.slider}>
              {comments.map((comm, index) => {
                return (
                  <div className={`flex-center ${css.comment}`} key={index}>
                    <img src={comm.img} alt="" />
                    <p>{comm.comment}</p>
                    <div className={css.line}>{comm.line}</div>
                    <div className={css.bio}>
                      <span>{comm.name}</span>
                      <span>{comm.post}</span>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </motion.div>
      </motion.section>
    </React.Fragment>
  );
};

export default Testimonial;
