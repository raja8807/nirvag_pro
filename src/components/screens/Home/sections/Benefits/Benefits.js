"use client";

import React, { useState } from 'react';
import styles from './Benefits.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { BENEFITS_CONTENT } from '@/constants/constants';
import CustomContainer from '@/components/ui/CustomContainer/CustomContainer';

export default function Benefits() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.benefitsSection} id="Benefits">
      <CustomContainer>
        <div className={styles.benefitsContainer}>
          <div className={styles.textWrapper} data-aos="fade-up">
            <div className={styles.upperHeading}>TOP BENEFITS</div>
            <h3 className={styles.title}>{BENEFITS_CONTENT.title}</h3>
          </div>
          
          <div className={styles.tabsWrapper} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.tabList} role="tablist">
              {BENEFITS_CONTENT.tabs.map((tab, idx) => (
                <button
                  key={idx}
                  className={`${styles.tabLink} ${activeTab === idx ? styles.active : ''}`}
                  onClick={() => setActiveTab(idx)}
                  role="tab"
                  aria-selected={activeTab === idx}
                >
                  <div className={styles.tabSvg}>{tab.svg}</div>
                  <span className={styles.tabTitle}>{tab.title}</span>
                </button>
              ))}
            </div>
            
            <div className={styles.tabContent}>
              <div className={styles.paneWrapper}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={BENEFITS_CONTENT.tabs[activeTab].image}
                    alt="benefits image representation"
                    width={535}
                    height={400}
                    layout="responsive"
                    className={styles.benefitsTabImage}
                    priority
                  />
                </div>
                
                <div className={styles.paneTextWrapper}>
                  <div className={styles.paneText}>
                    <h4 className={styles.paneHeading}>{BENEFITS_CONTENT.tabs[activeTab].paneTitle}</h4>
                    <p className={styles.paragraph}>{BENEFITS_CONTENT.tabs[activeTab].desc}</p>
                    
                    <div className={styles.linkWrapper}>
                      <Link href="/about" className={styles.ternaryButton}>
                        <div className={styles.buttonSmall}>Discover More</div>
                        <div className={styles.animateLineWrapper}>
                          <div className={styles.animateLine} style={{ transform: 'translate3d(0, 0, 0)' }}></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
