import React from 'react';
import styles from './Features.module.scss';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import CustomContainer from '@/components/ui/CustomContainer/CustomContainer';

export default function Features() {
  const featuresData = [
    {
      title: "Lightning Fast",
      description: "Optimized for speed. Our architecture ensures your users never have to wait.",
      icon: "⚡"
    },
    {
      title: "Highly Secure",
      description: "Built with security in mind from day one. Your data is protected by industry standards.",
      icon: "🔒"
    },
    {
      title: "Fully Responsive",
      description: "Looks gorgeous on any device. Desktop, tablet, or mobile — we've got you covered.",
      icon: "📱"
    },
    {
      title: "Customizable",
      description: "Tweak every aspect. Our SCSS variable system makes it incredibly easy to re-theme.",
      icon: "🎨"
    }
  ];

  return (
    <section className={styles.features}>
      <CustomContainer>
        <div className={styles.header} data-aos="fade-up">
          <h2 className={styles.title}>Why Choose Us</h2>
          <p className={styles.subtitle}>Discover the features that make our platform stand out.</p>
        </div>
        <div className={styles.grid}>
          {featuresData.map((feat, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <FeatureCard 
                title={feat.title}
                description={feat.description}
                icon={feat.icon}
              />
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
}
