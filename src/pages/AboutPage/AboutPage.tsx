import React, { memo } from 'react';

import styles from './AboutPage.module.scss';
import CTASection from '@/widgets/CTASection/CTASection';
import HeroAbout from '@/components/AboutComponents/HeroAbout/HeroAbout';
import SourcingProcess from '@/components/AboutComponents/SourcingProcess/SourcingProcess';
import StorySection from '@/components/AboutComponents/StorySection/StorySection';
import TeamSection from '@/components/AboutComponents/TeamSection/TeamSection';
import TimelineSection from '@/components/AboutComponents/TimelineSection/TimelineSection';

const AboutPage: React.FC = () => (
  <div className={styles.about}>
    <HeroAbout />
    <StorySection />
    <SourcingProcess />
    <TimelineSection />
    <TeamSection />
    <CTASection />
  </div>
);

export default memo(AboutPage);
