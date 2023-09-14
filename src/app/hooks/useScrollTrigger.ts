"use client";
import React, { useEffect, useRef } from "react";

export default function useScrollTrigger(callback: (val?: any) => void) {
  const isActive = useRef(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (isActive.current && scrollPercentage >= 20) {
        isActive.current = false;
        callback(scrollPercentage);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {};
}
