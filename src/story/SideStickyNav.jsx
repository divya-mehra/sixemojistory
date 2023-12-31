import React, { useState } from "react";
import styles from "./story.module.css";
import { Link } from "react-scroll";
import { Switch } from "@mui/material";
// import { opacity } from "html2canvas/dist/types/css/property-descriptors/opacity";

const SideStickyNav = ({ isMobile }) => {
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
    !isMobile && (
      <nav
        className={`${styles.sideStickyNav}`}
        style={{
          opacity: isHovered ? 1 : 0,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul>
          <Link
            className={styles.SideStickyNavLink}
            activeClass={styles.SideStickyNavLinkActive}
            to="LearnStory"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500} // Duration of the scrolling animation in milliseconds
          >
            View
          </Link>
          <Link
            className={styles.SideStickyNavLink}
            activeClass={styles.SideStickyNavLinkActive}
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
    )
  );
};

export default SideStickyNav;
