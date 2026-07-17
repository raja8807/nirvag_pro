"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { HERO_CONTENT } from "@/constants/constants";
import CustomContainer from '@/components/ui/CustomContainer/CustomContainer';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      sectionRef.current.style.setProperty("--mouse-x", x);
      sectionRef.current.style.setProperty("--mouse-y", y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.heroSection} ref={sectionRef}>
      <div className={`${styles.parallaxWrapper} ${styles.wrapper1}`}>
        <div className={`${styles.bgCircle} ${styles.circle1}`}></div>
      </div>
      <div className={`${styles.parallaxWrapper} ${styles.wrapper2}`}>
        <div className={`${styles.bgCircle} ${styles.circle2}`}></div>
      </div>
      <div className={`${styles.parallaxWrapper} ${styles.wrapper3}`}>
        <div className={`${styles.bgCircle} ${styles.circle3}`}></div>
      </div>
      <div className={`${styles.parallaxWrapper} ${styles.wrapper4}`}>
        <div className={`${styles.bgCircle} ${styles.circle4}`}></div>
      </div>
      <div className={`${styles.parallaxWrapper} ${styles.wrapper5}`}>
        <div className={`${styles.bgCircle} ${styles.circle5}`}></div>
      </div>

      <CustomContainer>
        <div className={styles.heroContainer}>
          <h1 className={styles.display} data-aos="fade-up">
            {HERO_CONTENT.headline[0]}{" "}
            <span className="text-highlight">{HERO_CONTENT.headline[1]}</span>{" "}
            {HERO_CONTENT.headline[2]}
          </h1>
          <p className={styles.paragraphLarge} data-aos="fade-up" data-aos-delay="100">{HERO_CONTENT.subheadline}</p>

          <div className={styles.buttonWrapper} data-aos="fade-up" data-aos-delay="200">
            <CustomButton href="/signup" variant="primary">
              {HERO_CONTENT.primaryButton}
            </CustomButton>
            <div className={styles.paragraphSmall}>
              {HERO_CONTENT.secondaryText}
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
