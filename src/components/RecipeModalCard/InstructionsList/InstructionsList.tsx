import React from 'react';
import styles from './InstructionsList.module.scss';
import { InstructionStep } from '../types/modalRecipeType';

interface Props {
  steps?: InstructionStep[];
}

const InstructionsList: React.FC<Props> = ({ steps = [] }) => (
  <div className={styles.instructions}>
    <h3>Instructions</h3>
    <div className={styles.steps}>
      {steps.map((s, i) => (
        <div key={i} className={styles.step}>
          <div className={styles.num}>{i + 1}</div>
          <div>
            <h4>{s.title}</h4>
            <p>{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default InstructionsList;
