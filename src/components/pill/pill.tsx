import React from "react";
import styles from '../../assets/commonStyles/commonStyles.module.scss';

const Pill = ({ children, variant = "default" }: { 
  children: React.ReactNode;
  variant?: "default" | "light";
}) => {
  return (
    <span className={`${styles.pill} ${variant === "light" ? styles.pillLight : ""}`}>
      {children}
    </span>
  );
};

export default Pill;