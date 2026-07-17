import React from 'react';
import styles from './Home.module.scss';
import Hero from './sections/Hero/Hero';
import Productivity from './sections/Productivity/Productivity';
import Usp from './sections/Usp/Usp';
import ExtraFeatures from './sections/ExtraFeatures/ExtraFeatures';
import Benefits from './sections/Benefits/Benefits';
import Integrations from './sections/Integrations/Integrations';
import Demo from './sections/Demo/Demo';
import Pricing from './sections/Pricing/Pricing';
import Faqs from './sections/Faqs/Faqs';
import Cta from './sections/Cta/Cta';

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <Productivity />
      <Usp />
      <ExtraFeatures />
      <Benefits />
      <Integrations />
      <Demo />
      <Pricing />
      <Faqs />
      <Cta />
    </div>
  );
}
