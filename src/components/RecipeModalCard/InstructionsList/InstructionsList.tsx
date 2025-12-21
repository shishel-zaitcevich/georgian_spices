import React from 'react';
import styles from './InstructionsList.module.scss';

const steps = [
  { title: 'Prepare the Dough', text: 'Mix flour, salt, and water...' },
  { title: 'Make the Filling', text: 'Mix minced meat, onions, garlic...' },
  { title: 'Assemble', text: 'Roll out dough circles...' },
  { title: 'Cook', text: 'Boil salted water and cook 10-12 minutes.' },
];

const InstructionsList: React.FC = () => (
  <div className={styles.instructions}>
    <h3>Instructions</h3>
    <div className={styles.steps}>
      {steps.map((s, i) => (
        <div key={i} className={styles.step}>
          <div className={styles.num}>{i + 1}</div>
          <div>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default InstructionsList;
