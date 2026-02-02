import React from 'react';
import styles from './Footer.module.scss';
import FooterColumn from './FooterColumn';
import SocialIcon from './SocialIcon';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <h3 className={styles.brandTitle}>Georgian Spices</h3>
          <p className={styles.brandDescription}>
            Tuomme georgialaisten vuorten aidon maun keittiöösi. Laatu, perinne ja maku jokaisessa
            ripauksessa.
          </p>
        </div>

        <FooterColumn title="Company" links={['About Us', 'Contact', 'Recipes']} />
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>© 2026 Georgian Spices. Kaikki oikeudet pidätetään.</p>
        <div className={styles.socials}>
          <SocialIcon
            href={'https://www.facebook.com/GeorgianFoodHelsinki/'}
            variant={'facebook'}
          />
          <SocialIcon href={''} variant={'instagram'} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
