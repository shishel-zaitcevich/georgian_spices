import React from 'react';
import styles from './CTASection.module.scss';
import Button from '@/shared/Button/Button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => (
  <section className={styles.cta}>
    <h2>Oletko valmis maistamaan eron?</h2>
    <p>Tuo Kaukasuksen aito aromi keittiöösi valikoimallamme korkealaatuisia mausteita.</p>

    <div className={styles.contactBox}>
      <p>
        Haluatko tehdä tilauksen tai saada lisätietoja?{' '}
        <strong>
          Soita meille numeroon <a href="tel:+995555123456">+995 555 123 456</a>
        </strong>{' '}
        tai{' '}
        <strong>
          lähetä sähköpostia osoitteeseen{' '}
          <a href="mailto:info@georgianspices.com">info@georgianspices.com</a>
        </strong>
        .
      </p>
      <p>
        Voit myös ottaa meihin yhteyttä{' '}
        <a
          href="https://www.facebook.com/GeorgianFoodHelsinki/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebookissa
        </a>
        – autamme mielellämme!
      </p>
    </div>

    <div className={styles.buttons}>
      <Button variant="orange">
        <Link to={'/recipes'} className={styles.link}>
          Tutustu resepteihin
        </Link>
      </Button>
    </div>
  </section>
);

export default CTASection;
