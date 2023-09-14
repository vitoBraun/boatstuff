"use client";
import React from "react";
import styles from "./BurgerButton.module.css";

interface BurgerProps {
  sideBarToggle: boolean;
  handleClick: () => void;
}
export default function BurgerButton({
  sideBarToggle,
  handleClick,
}: BurgerProps) {
  const burgerStyle =
    styles.icon +
    " " +
    styles["nav-icon-2"] +
    " " +
    (sideBarToggle && styles["open"]);

  return (
    <div className={styles.burger_container}>
      <div
        className={burgerStyle}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleClick();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
