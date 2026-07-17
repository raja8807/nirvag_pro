import React from 'react';
import styles from './Demo.module.scss';
import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton/CustomButton';
import { DEMO_CONTENT } from '@/constants/constants';
import CustomContainer from '@/components/ui/CustomContainer/CustomContainer';

export default function Demo() {
  const logos = [
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6624ebbb9bf16dc9d038c02a_Logo.svg",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6624ebbb4c295a70e30e3d6a_Group%2039887.svg",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6624ebbb817115fff427f808_Logo-1.svg",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6624ebbbee1c0be74c6df8da_Logo-2.svg",
    "https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6624ebbc774554a9548ca198_Logo-3.svg"
  ];

  return (
    <section className={styles.demoSection}>
      <CustomContainer>
        <div className={styles.demoContainer}>
          <div className={styles.row}>
            <div className={styles.textWrapper} data-aos="fade-right">
              <h3 className={styles.title}>
                {DEMO_CONTENT.title[0]} <span className="text-highlight">{DEMO_CONTENT.title[1]}</span> {DEMO_CONTENT.title[2]}
              </h3>
              <p className={styles.paragraphLarge}>
                {DEMO_CONTENT.desc}
              </p>
              
              <div className={styles.btnsWrapper}>
                <div className={styles.playLink}>
                  <div className={styles.playIconWrapper}>
                    <svg width="24" height="24" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M19.3849 16.4847C19.2913 16.4215 19.1671 16.4118 19.0633 16.4604C18.9598 16.509 18.8945 16.6076 18.8945 16.7153V29.2868C18.8945 29.3945 18.9598 29.4931 19.0633 29.5417C19.1071 29.5623 19.1551 29.5725 19.2026 29.5725C19.2669 29.5725 19.331 29.554 19.3849 29.5174L28.626 23.2316C28.7052 23.1776 28.7517 23.0919 28.7517 23.001C28.7517 22.9102 28.7052 22.8245 28.626 22.7705L19.3849 16.4847Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span className={styles.buttonText}>{DEMO_CONTENT.button1}</span>
                </div>
                
                <CustomButton href="/about" variant="primary">
                  {DEMO_CONTENT.button2}
                </CustomButton>
              </div>
            </div>
            
            <div className={styles.imageWrapper} data-aos="fade-left">
              <Image 
                src="https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6602ee327ac3ef6e5085e576_Demo%20Image.webp"
                alt="Demo mockup"
                width={665}
                height={500}
                layout="responsive"
                className={styles.demoImage}
              />
            </div>
          </div>
          
          <div className={styles.trustedWrapper} data-aos="fade-up">
            <h4 className={styles.trustedTitle}>{DEMO_CONTENT.trustedTitle}</h4>
            <div className={styles.logoMarqueeWrapper}>
              <div className={styles.logoRow}>
                {logos.concat(logos).map((logo, idx) => (
                  <Image 
                    key={idx} 
                    src={logo} 
                    alt="Enterprise Partner Logo" 
                    width={120} 
                    height={40} 
                    className={styles.partnerLogo}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
