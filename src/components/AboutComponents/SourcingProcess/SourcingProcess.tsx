import React from 'react';
import styles from './SourcingProcess.module.scss';

const steps = [
  { icon: 'front_hand', title: 'Hand-Picked', text: 'Each spice is carefully selected...' },
  { icon: 'wb_sunny', title: 'Sun-Dried', text: 'Our spices are naturally sun-dried...' },
  { icon: 'handshake', title: 'Direct Trade', text: 'We work directly with local farmers...' },
];

const SourcingProcess: React.FC = () => (
  <section className={styles.process}>
    <h2>Our Sourcing Process</h2>
    <div className={styles.grid}>
      {steps.map((s) => (
        <div key={s.title} className={styles.card}>
          <span className={`material-symbols-outlined ${styles.icon}`}>{s.icon}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SourcingProcess;
