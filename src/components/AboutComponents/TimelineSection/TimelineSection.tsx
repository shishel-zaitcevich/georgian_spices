import React from 'react';
import styles from './TimelineSection.module.scss';

const events = [
  { year: '2015', title: 'The Idea', text: 'Founded by a small team of chefs...' },
  { year: '2017', title: 'First Harvest', text: 'We started exporting spices worldwide...' },
  { year: '2019', title: 'Global Shipping', text: 'Expanding to 30+ countries...' },
  { year: '2023', title: 'Award-Winning', text: 'Recognized for quality excellence...' },
];

const TimelineSection: React.FC = () => (
  <section className={styles.timeline}>
    <div className={styles.line}></div>
    {events.map((e) => (
      <div key={e.year} className={styles.event}>
        <div className={styles.circle}></div>
        <div className={styles.content}>
          <span>{e.year}</span>
          <h3>{e.title}</h3>
          <p>{e.text}</p>
        </div>
      </div>
    ))}
  </section>
);

export default TimelineSection;
