import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [menuOpenend, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <React.Fragment>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings  ${css.wrapper}`}
        style={{ boxShadow: headerShadow }}
      >
        <div className={`flexCenter innerWidth ${css.container}`}>
          <div className={css.name}>Azam khan</div>
          <ul
            ref={menuRef}
            style={getMenuStyles(menuOpenend)}
            className={`flexCenter  ${css.menu}`}
          >
            <li onClick={() => setMenuOpened(false)}>
              <a href="#experties">SERVICES</a>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <a href="#experience">EXPERIENCE</a>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <a href="#porfolio">PORTFOLIO</a>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <a href="#testimonial">TESTIMONIALS</a>
            </li>
            <li className={`flexCenter ${css.phone}`}>
              <a href="https://wa.me/923419002614" title="whatsapp">
                <p>WhatsApp</p>
                <FaWhatsapp size={"40px"} />
              </a>
            </li>
          </ul>
          <div
            onClick={() => setMenuOpened((prev) => !prev)}
            className={css.menuIcon}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Header;
