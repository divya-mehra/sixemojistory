import React, { useState } from "react";
import styles from "./story.module.css";
import { Link } from "react-scroll";
// import { opacity } from "html2canvas/dist/types/css/property-descriptors/opacity";

const SideStickyNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log("Mouse entered");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("Mouse left");
    setIsHovered(false);
  };

  return (
    <nav
      className={`${styles.sideStickyNav}`}
      style={{
        opacity: isHovered ? 1 : 0,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
      <Link className={styles.SideStickyNavLink}
          activeClass="active"
          to="LearnStory"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as needed
          duration={500} // Duration of the scrolling animation in milliseconds
        >
          Learn
        </Link>
        <Link className={styles.SideStickyNavLink}
          activeClass="active"
          to="CreateStory"
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as needed
          duration={500} // Duration of the scrolling animation in milliseconds
        >
          Create
        </Link>
      </ul>
    </nav>
  );
};

export default SideStickyNav;
