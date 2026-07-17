import React from "react";
import styles from "./Productivity.module.scss";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTIVITY_CONTENT } from "@/constants/constants";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";

export default function Productivity() {
  return (
    <section className={styles.productivitySection} id="Features">
      <CustomContainer>
        <div className={styles.productivityContainer}>
          <div
            className={styles.imageWrapper}
            data-aos="fade-up"
            data-aos-offset="-1000px"
          >
            <Image
              src="https://cdn.prod.website-files.com/65f8604debf8d297844a6352/65f88bf168f3b7913206a555_Productivity%20Image.webp"
              alt="Laptop screen"
              width={1030}
              height={600}
              layout="responsive"
              className={styles.productivityImage}
              priority
            />
          </div>

          <div className={styles.row}>
            <div className={styles.textWrapper} data-aos="fade-up">
              <h2 className={styles.title}>{PRODUCTIVITY_CONTENT.title}</h2>
              <p className={styles.paragraphLarge}>
                {PRODUCTIVITY_CONTENT.paragraph}
              </p>
            </div>

            <div className={styles.blocksWrapper}>
              {PRODUCTIVITY_CONTENT.blocks.map((b, i) => (
                <div
                  key={i}
                  className={`${styles.block} ${b.title === "Control Purchases" ? styles.optimizationTag : ""}`}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className={styles.iconWrapper}>
                    <Image src={b.icon} alt={b.title} width={32} height={32} />
                  </div>
                  <h3 className={styles.blockTitle}>{b.title}</h3>
                  <p className={styles.paragraphSmall}>{b.desc}</p>
                  <div className={styles.linkWrapper}>
                    <Link href="/about" className={styles.ternaryButton}>
                      <div className={styles.buttonSmall}>Discover More</div>
                      <div className={styles.animateLineWrapper}>
                        <div className={styles.animateLine}></div>
                      </div>
                    </Link>
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
