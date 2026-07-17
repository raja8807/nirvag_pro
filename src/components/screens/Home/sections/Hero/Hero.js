"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { HERO_CONTENT } from "@/constants/constants";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import AnimatedBackground from "@/components/common/AnimatedBackground/AnimatedBackground";

export default function Hero() {
  return (
    <AnimatedBackground className={styles.heroSection}>
      <CustomContainer>
        <div className={styles.heroContainer}>
          <h1 className={styles.display} data-aos="fade-up">
            {HERO_CONTENT.headline[0]}{" "}
            <span className="text-highlight">{HERO_CONTENT.headline[1]}</span>{" "}
            {HERO_CONTENT.headline[2]}
          </h1>
          <p
            className={styles.paragraphLarge}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {HERO_CONTENT.subheadline}
          </p>

          <div
            className={styles.buttonWrapper}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <CustomButton href="/login?signup=true" variant="primary">
              {HERO_CONTENT.primaryButton}
            </CustomButton>
            <div className={styles.paragraphSmall}>
              {HERO_CONTENT.secondaryText}
            </div>
          </div>
        </div>
      </CustomContainer>
    </AnimatedBackground>
  );
}
