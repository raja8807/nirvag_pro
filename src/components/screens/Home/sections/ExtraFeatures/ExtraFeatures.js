import React from 'react';
import styles from './ExtraFeatures.module.scss';
import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton/CustomButton';
import { EXTRA_FEATURES_CONTENT } from '@/constants/constants';
import CustomContainer from '@/components/ui/CustomContainer/CustomContainer';

export default function ExtraFeatures() {
  const colorClasses = [
    styles.colorLightYellow,
    styles.colorLightPurple,
    styles.colorLightBlue,
    styles.colorLightGreen,
    styles.colorLightPink
  ];

  return (
    <section className={styles.featureSection}>
      <CustomContainer>
        <div className={styles.featuresContainer}>
          <h3 className={styles.sectionTitle} data-aos="fade-up">{EXTRA_FEATURES_CONTENT.title}</h3>
          
          <div className={styles.featureBlocksWrapper}>
            {EXTRA_FEATURES_CONTENT.features.map((feature, i) => (
              <div 
                key={i} 
                className={`${styles.featureBlock} ${colorClasses[i]} ${feature.hasImage ? styles.withoutBottomPadding : ''}`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className={styles.titleContainer}>
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={36} 
                    height={36} 
                    className={styles.featureIcon}
                  />
                  <div className={styles.titleWrapper}>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                  </div>
                </div>
                <p className={styles.paragraph}>{feature.desc}</p>
                
                {feature.hasImage && (
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={feature.image} 
                      alt="Feature visual representation" 
                      width={345} 
                      height={200}
                      layout="responsive"
                      className={styles.featureImg}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className={styles.ctaWrapper}>
            <CustomButton href="/signup" variant="secondary">
              {EXTRA_FEATURES_CONTENT.button}
            </CustomButton>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
