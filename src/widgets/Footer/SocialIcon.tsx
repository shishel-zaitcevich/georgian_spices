import React from 'react';
import styles from './Footer.module.scss';

interface SocialIconProps {
  href: string;
  variant: 'facebook' | 'instagram';
}

const facebookPath =
  'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z';
const instagramPath =
  'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.002 6.363a4.731 4.731 0 11-4.73 4.731 4.731 4.731 0 014.73-4.731zm3.808-3.808a1.362 1.362 0 11-1.362 1.362 1.362 1.362 0 011.362-1.362zM12 15.531a3.531 3.531 0 110-7.062 3.531 3.531 0 010 7.062z';

const SocialIcon: React.FC<SocialIconProps> = ({ href, variant }) => {
  const path = variant === 'facebook' ? facebookPath : instagramPath;

  return (
    <a href={href} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
      <svg aria-hidden="true" className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
        <path clipRule="evenodd" fillRule="evenodd" d={path} />
      </svg>
    </a>
  );
};
export default SocialIcon;
