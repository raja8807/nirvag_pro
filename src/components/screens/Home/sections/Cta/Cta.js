import React from 'react';
import styles from './Cta.module.scss';
import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton/CustomButton';
import { CTA_CONTENT } from '@/constants/constants';
import CustomContainer from '@/components/ui/CustomContainer/CustomContainer';

export default function Cta() {
  return (
    <section className={styles.ctaSection}>
      <CustomContainer>
        <div className={styles.ctaContainer} data-aos="zoom-in">
          <h2 className={styles.ctaTitle}>
            {CTA_CONTENT.title}
          </h2>
          
          <div className={styles.ctaButtonWrapper}>
            <CustomButton href="/signup" variant="primary">
              {CTA_CONTENT.button}
            </CustomButton>
          </div>
          
          <div className={styles.ctaRatingContainer}>
            <div className={styles.ctaRatingWrapper}>
              <div className={styles.scoreText}>4.9 / 5</div>
              <Image 
                src="https://cdn.prod.website-files.com/65f8604debf8d297844a6352/6606dbc32e5af12b57e3a75b_White%20Rating%20Star.svg" 
                alt="Rating stars" 
                width={120} 
                height={20}
                className={styles.starsImg}
              />
            </div>
            <div className={styles.downloadText}>Over 1 million downloads</div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
