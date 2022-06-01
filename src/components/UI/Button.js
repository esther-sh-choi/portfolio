import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const STYLES = [styles.primaryBtn, styles.outlineBtn];

const SIZES = [styles.mediumBtn, styles.largeBtn];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/projects" className={styles["btn-mobile"]}>
      <button
        className={`${styles.btn} ${checkButtonStyle} ${checkButtonSize}`}
      >
        {children}
      </button>
    </Link>
  );
};
