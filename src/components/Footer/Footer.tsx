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
            Bringing the authentic taste of Georgian mountains to your kitchen. Quality, tradition,
            and flavor in every pinch.
          </p>
        </div>

        {/* <FooterColumn
          title="Shop"
          links={['Spice Blends', 'Single Spices', 'Salts & Peppers', 'Gift Sets']}
        /> */}

        <FooterColumn title="Company" links={['About Us', 'Contact', 'Recipes']} />
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>© 2025 Georgian Spices. All rights reserved.</p>
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
