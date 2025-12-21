import React from 'react';
import styles from './CTASection.module.scss';
import Button from '@/shared/Button/Button';
import { Link } from 'react-router-dom';

// const CTASection: React.FC = () => (
//   <section className={styles.cta}>
//     <h2>Ready to Taste the Difference?</h2>
//     <p>
//       Bring the authentic aroma of the Caucasus to your kitchen with our curated selection of
//       premium spices.
//     </p>
//     <div className={styles.buttons}>
//       <Button variant="orange">Shop Now</Button>
//       <Button variant="transparent">Explore Recipes</Button>
//     </div>
//   </section>
// );

const CTASection: React.FC = () => (
  <section className={styles.cta}>
    <h2>Ready to Taste the Difference?</h2>
    <p>
      Bring the authentic aroma of the Caucasus to your kitchen with our curated selection of
      premium spices.
    </p>

    <div className={styles.contactBox}>
      <p>
        Want to place an order or learn more?{' '}
        <strong>
          Call us at <a href="tel:+995555123456">+995 555 123 456</a>
        </strong>{' '}
        or{' '}
        <strong>
          email <a href="mailto:info@georgianspices.com">info@georgianspices.com</a>
        </strong>
        .
      </p>
      <p>
        You can also reach us on{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        ,{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        , or{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>{' '}
        — we’re always happy to help!
      </p>
    </div>

    <div className={styles.buttons}>
      <Button variant="orange">
        <Link to={'/recipes'} className={styles.link}>
          Explore Recipes
        </Link>
      </Button>
    </div>
  </section>
);

export default CTASection;
