"use client";

import React, { useState } from 'react';
import styles from './Faqs.module.scss';
import Image from 'next/image';
import { FAQS_CONTENT } from '@/constants/constants';
import CustomContainer from '@/components/ui/CustomContainer/CustomContainer';

export default function Faqs() {
  const [openIdx, setOpenIdx] = useState(0);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className={styles.faqsSection} id="FAQs">
      <CustomContainer>
        <div className={styles.faqsRow}>
          
          {/* Left Text / Info wrapper */}
          <div className={styles.faqsTextWrapper} data-aos="fade-right">
            <h3 className={styles.title}>{FAQS_CONTENT.title}</h3>
            
            <div className={styles.faqsLinksWrapper}>
              <h4 className={styles.contactTitle}>{FAQS_CONTENT.contactTitle}</h4>
              <div className={styles.faqsLinkBlocksWrapper}>
                <a href="mailto:support@site.com" className={styles.faqsLinkBlock}>
                  <Image 
                    src="https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6606adda9889f3fe549a2b05_mail%20icon.svg" 
                    alt="mail icon" 
                    width={20} 
                    height={20}
                    className={styles.contactIcon}
                  />
                  <div className={styles.contactText}>Support@site.com</div>
                </a>
                <a href="tel:123-456-7890" className={styles.faqsLinkBlock}>
                  <Image 
                    src="https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6606addad25f39a647f40a96_Phone%20icon.svg" 
                    alt="Phone icon" 
                    width={20} 
                    height={20}
                    className={styles.contactIcon}
                  />
                  <div className={styles.contactText}>123-456-7890</div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Accordions Wrapper */}
          <div className={styles.accordionsWrapper} data-aos="fade-left">
            {FAQS_CONTENT.faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className={styles.accordionBlock}>
                  <button 
                    className={styles.titleWrapper}
                    onClick={() => handleToggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>{faq.q}</span>
                    <div className={`${styles.accordionArrow} ${isOpen ? styles.arrowOpen : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0007 13.1724L16.9505 8.22266L18.3647 9.63687L12.0007 16.0009L5.63672 9.63687L7.05094 8.22266L12.0007 13.1724Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`${styles.paraWrapper} ${isOpen ? styles.paraOpen : ''}`}>
                    <div className={styles.spacing20}></div>
                    <p className={styles.answerText}>{faq.a}</p>
                  </div>
                  
                  <div className={styles.spacing35}></div>
                </div>
              );
            })}
          </div>
          
        </div>
      </CustomContainer>
    </section>
  );
}
