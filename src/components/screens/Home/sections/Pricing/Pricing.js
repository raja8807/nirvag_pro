"use client";

import React, { useState, useEffect } from "react";
import styles from "./Pricing.module.scss";
import Image from "next/image";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Check, CheckCheck } from "lucide-react";
import CustomContainer from '@/components/ui/CustomContainer/CustomContainer';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Sophia Smith",
      role: "CEO of AYZ Tech",
      rating: "4.9",
      text: "“On-screen observation, along with persistent customer data that flows with the conversation context”",
      img: "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/661431b57d3b0889e10e5598_Reviewer%20Image%202.webp",
    },
    {
      name: "John Doe",
      role: "CTO of Nexa",
      rating: "4.8",
      text: "“Excellent support team, real-time tracking has improved our operations by more than 35%”",
      img: "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/661431b57d3b0889e10e5598_Reviewer%20Image%202.webp",
    },
    {
      name: "Emily Davis",
      role: "Product Owner",
      rating: "5.0",
      text: "“Incredibly clean UI clone. Setup took us less than 5 minutes and operations became flawless.”",
      img: "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/661431b57d3b0889e10e5598_Reviewer%20Image%202.webp",
    },
  ];

  const packages = [
    {
      name: "Starter",
      sub: "For the professionals",
      monthlyPrice: 19,
      yearlyPrice: 199,
      recommended: false,
      features: [
        "20 Asset Delivery",
        "Unlimited Bandwidth",
        "Support System",
        "120+ Message all Operator",
        "20 Asset Delivery",
        "Unlimited Data",
        "24x7 Support System",
      ],
    },
    {
      name: "Agency",
      sub: "For the professionals",
      monthlyPrice: 59,
      yearlyPrice: 599,
      recommended: true,
      features: [
        "20 Asset Delivery",
        "Unlimited Bandwidth",
        "Support System",
        "120+ Message all Operator",
        "20 Asset Delivery",
        "Unlimited Data",
        "24x7 Support System",
      ],
    },
    {
      name: "Ultimate",
      sub: "For the professionals",
      monthlyPrice: 99,
      yearlyPrice: 999,
      recommended: false,
      features: [
        "20 Asset Delivery",
        "Unlimited Bandwidth",
        "Support System",
        "120+ Message all Operator",
        "20 Asset Delivery",
        "Unlimited Data",
        "24x7 Support System",
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.pricingSection} id="Pricing">
      <CustomContainer>
        <div className={styles.pricingContainer}>
          {/* Trust Pilot Reviews Card */}
          <div className={styles.trustPilotReviewWrapper} data-aos="fade-right">
            <div className={styles.trustPilotScoreWrapper}>
              <div className={styles.scoreNumber}>4.9</div>
              <Image
                src="https://cdn.prod.website-files.com/65f8604debf8d297844a6352/660433e3062e698680ce31a0_Trust%20Pilot%20Stars.webp"
                alt="rating stars"
                width={120}
                height={22}
                className={styles.starsImg}
              />
              <div className={styles.scoreTitle}>Trust Pilot Score</div>
              <div className={styles.reviewsCount}>102 Reviews</div>
            </div>

            <div className={styles.dividerLine}></div>

            <div className={styles.reviewSlider}>
              <div className={styles.reviewSlide}>
                <div className={styles.slideContent}>
                  <div className={styles.reviewerImageWrapper}>
                    <Image
                      src={reviews[currentReview].img}
                      alt="Reviewer Image"
                      width={80}
                      height={80}
                      className={styles.reviewerImg}
                    />
                  </div>
                  <div className={styles.reviewTextWrapper}>
                    <div className={styles.ratingRow}>
                      <span className={styles.ratingNumber}>
                        {reviews[currentReview].rating}
                      </span>
                      <Image
                        src="https://cdn.prod.website-files.com/65f8604debf8d297844a6352/660438bd53ea1f131e5894be_user%20rating.svg"
                        alt="stars rating icon"
                        width={80}
                        height={16}
                      />
                    </div>
                    <p className={styles.paragraphLarge}>
                      {reviews[currentReview].text}
                    </p>
                    <div className={styles.reviewerInfo}>
                      <div className={styles.reviewerName}>
                        {reviews[currentReview].name}
                      </div>
                      <div className={styles.reviewerRole}>
                        {reviews[currentReview].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Blocks */}
          <div className={styles.pricingComponentsWrapper} data-aos="fade-left">
            <h3 className={styles.title}>Simple and easy pricing</h3>
            <p className={styles.paragraphLarge}>
              The most competitively priced product in the market
            </p>

            <div className={styles.toggleWrapper}>
              <span
                className={`${styles.periodLabel} ${!isYearly ? styles.activePeriod : ""}`}
              >
                Monthly
              </span>
              <button
                className={`${styles.toggleSwitch} ${isYearly ? styles.yearlyActive : ""}`}
                onClick={() => setIsYearly(!isYearly)}
                aria-label="Toggle pricing period"
              >
                <span className={styles.switchCircle}></span>
              </button>
              <span
                className={`${styles.periodLabel} ${isYearly ? styles.activePeriod : ""}`}
              >
                Yearly
              </span>
            </div>

            <div className={styles.pricingCardsGrid}>
              {packages.map((pkg, i) => (
                <div
                  key={i}
                  className={`${styles.pricingCard} ${pkg.recommended ? styles.recommended : ""}`}
                >
                  <div className={styles.topRow}>
                    <h4 className={styles.cardName}>{pkg.name}</h4>
                    <div className={styles.cardSub}>{pkg.sub}</div>
                  </div>
                  <div className={styles.pricingDivider}></div>

                  <div className={styles.pricingListDiv}>
                    <div className={styles.priceDiv}>
                      <span className={styles.currency}>$</span>
                      <span className={styles.priceVal}>
                        {isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}
                      </span>
                      <span className={styles.period}>/user</span>
                    </div>

                    <div className={styles.pointsWrapper}>
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className={styles.pointWrapper}>
                          <div className={styles.checkmark}>
                            {/* <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.24367 4.0655L6.82871 0.480469L7.38024 1.03201L3.24367 5.16857L0.761719 2.68665L1.31326 2.13511L3.24367 4.0655Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"></path>
                            </svg> */}

                            <Check />
                          </div>

                          <span className={styles.featText}>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.pricingBtnWrapper}>
                      <CustomButton
                        href="/signup"
                        variant={pkg.recommended ? "primary" : "secondary"}
                        style={{ display: "block", width: "100%" }}
                      >
                        Start 14-day free trial
                      </CustomButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
