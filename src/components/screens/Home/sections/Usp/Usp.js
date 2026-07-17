import React from "react";
import styles from "./Usp.module.scss";
import Image from "next/image";
import { USP_CONTENT } from "@/constants/constants";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";

export default function Usp() {
  return (
    <section className={styles.uspSection}>
      <CustomContainer>
        <div className={styles.uspContainer}>
          {USP_CONTENT.map((block, idx) => (
            <div
              key={idx}
              className={`${styles.uspBlock} ${block.reverse ? styles.reverse : ""}`}
            >
              <div className={styles.textCol}>
                <div
                  className={styles.tagWrapper}
                  data-aos={block.reverse ? "fade-left" : "fade-right"}
                >
                  <div className={styles.upperHeading}>{block.tag}</div>
                </div>
                <h3
                  className={styles.title}
                  data-aos={block.reverse ? "fade-left" : "fade-right"}
                >
                  {block.title}
                </h3>
                <p
                  className={styles.paragraph}
                  data-aos={block.reverse ? "fade-left" : "fade-right"}
                >
                  {block.desc}
                </p>
                <div className={styles.pointsWrapper}>
                  {block.points.map((p, i) => (
                    <div
                      key={i}
                      className={styles.point}
                      data-aos={block.reverse ? "fade-left" : "fade-right"}
                    >
                      <Image
                        src="https://cdn.prod.website-files.com/65f8604debf8d297844a6352/65fb140bdaed9ab8180c2e3c_Checkmark.svg"
                        alt="checkmark"
                        width={20}
                        height={20}
                        className={styles.checkmark}
                      />
                      <div className={styles.list}>{p}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={styles.imageCol}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Image
                  src={block.image}
                  alt={block.title}
                  width={560}
                  height={450}
                  layout="responsive"
                  className={`${styles.image} ${styles[`image${idx + 1}`]}`}
                />
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
}
