import React from 'react';
import styles from './FeatureCard.module.scss';

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
