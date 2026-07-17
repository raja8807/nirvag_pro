import React from 'react';
import styles from './Integrations.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { INTEGRATIONS_CONTENT } from '@/constants/constants';
import CustomContainer from '@/components/ui/CustomContainer/CustomContainer';

export default function Integrations() {
  const logosRow1 = [
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914b2b00a3aeeeea79f2_Logo%205.webp",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914a4553576de22d1b25_Logo%206.webp",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914b29749b2526c758c1_Logo%207.webp",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914be12a31b83861c692_Logo%207-1.webp",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914be9a77c045030b054_Logo%202.webp",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914b4797f2483df82627_Logo%208.webp"
  ];

  const logosRow2 = [
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914ba970a0b821fae8e4_Logo%205-1.webp",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914bac7ffd12229b339c_Logo%208-1.webp",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914bc20798ebda892250_Logo%206-1.webp",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914b08aefbf1df3e01b5_Logo%2012.webp",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914acdb42d79ba8b9ba1_Logo%2011.webp",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6601914a356df82d2cfaf1bb_Logo%2010.webp"
  ];

  return (
    <section className={styles.integrationSection} id="Integrations">
      <CustomContainer>
        <div className={styles.integrationContainer}>
          <div className={styles.integrationRow}>
            <h3 className={styles.title} data-aos="fade-up">{INTEGRATIONS_CONTENT.title}</h3>
            
            <div className={styles.loopWrapper} data-aos="zoom-in" data-aos-delay="100">
              <div className={styles.loopGradientLeft}></div>
              <div className={styles.loopGradientRight}></div>
              
              <div className={styles.loopRowsWrapper}>
                <div className={styles.loopRow}>
                  {logosRow1.concat(logosRow1).map((logo, idx) => (
                    <Image 
                      key={idx} 
                      src={logo} 
                      alt="Integration Tool Logo" 
                      width={120} 
                      height={40} 
                      className={styles.toolLogo}
                    />
                  ))}
                </div>
              </div>
              
              <div className={`${styles.loopRowsWrapper} ${styles.rowReverse}`}>
                <div className={`${styles.loopRow} ${styles.marqueeReverse}`}>
                  {logosRow2.concat(logosRow2).map((logo, idx) => (
                    <Image 
                      key={idx} 
                      src={logo} 
                      alt="Integration Tool Logo" 
                      width={120} 
                      height={40} 
                      className={styles.toolLogo}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.discoverWrapper} data-aos="fade-up" data-aos-delay="200">
              <Link href="/about" className={styles.discoverBtn}>
                {INTEGRATIONS_CONTENT.button}
              </Link>
            </div>
          </div>
          
          {/* Case Study Card */}
          <div className={styles.caseStudyContainer}>
            <div className={styles.caseStudyCard} data-aos="fade-up">
              <div className={styles.videoWrapper}>
                <Image 
                  src="https://cdn.prod.website-files.com/65f8604debf8d297844a6352/66143167e648a36e10eec445_Case%20study%20image%202.webp"
                  alt="case study image"
                  width={622}
                  height={380}
                  layout="responsive"
                  className={styles.caseStudyImage}
                />
                <div className={styles.playIcon}>
                  <svg width="24" height="24" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M66 46L38 64L38 28L66 46Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
              
              <div className={styles.caseStudyTextWrapper}>
                <h4 className={styles.caseStudyTitle}>{INTEGRATIONS_CONTENT.caseStudy.title}</h4>
                <p className={styles.caseStudyParagraph}>
                  {INTEGRATIONS_CONTENT.caseStudy.desc}
                </p>
                
                <div className={styles.statsWrapper}>
                  <div className={styles.statBlock}>
                    <div className={styles.statTitle}>
                      <span className={`${styles.dot} ${styles.yellow}`}></span>
                      {INTEGRATIONS_CONTENT.caseStudy.stat1.label}
                    </div>
                    <div className={styles.statNumber}>{INTEGRATIONS_CONTENT.caseStudy.stat1.value}<span>{INTEGRATIONS_CONTENT.caseStudy.stat1.symbol}</span></div>
                  </div>
                  <div className={styles.dividerLine}></div>
                  <div className={styles.statBlock}>
                    <div className={styles.statTitle}>
                      <span className={`${styles.dot} ${styles.red}`}></span>
                      {INTEGRATIONS_CONTENT.caseStudy.stat2.label}
                    </div>
                    <div className={styles.statNumber}>{INTEGRATIONS_CONTENT.caseStudy.stat2.value}<span>{INTEGRATIONS_CONTENT.caseStudy.stat2.symbol}</span></div>
                  </div>
                </div>
                
                <div className={styles.linkWrapper}>
                  <Link href="/about" className={styles.ternaryButton}>
                    <div className={styles.buttonSmall}>{INTEGRATIONS_CONTENT.caseStudy.button}</div>
                    <div className={styles.animateLineWrapper}>
                      <div className={styles.animateLine}></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
