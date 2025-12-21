import React from 'react';
import styles from './TeamSection.module.scss';

const members = [
  {
    name: 'Nino K.',
    role: 'Founder',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3fxmm5LX2KYDCrZvX4AuTVC1aN7b3ktVnR6X0AMVQ6gqqVlflKDumSbDbzx21jC51lpDFogDh6gbKqtgamVga7FOT9tbSz4kMvtXasAN9l6CZiyKEgMAYpuHoHeWVtvjtg5xc8EOSHzcPKmV_PSKimpL7ONkzRze4X5gB9J9f4LNpUTi8Y0f9iYrfnm9acMQ4F9ZDvQqG1Ikt8s5kLXf0zYRCKtxFLhD-GVW3RZh5kcSVFZ80cJ_IMiOa67jtkDkB4aIlBbuZHDpS',
  },
  {
    name: 'Irakli M.',
    role: 'Head of Production',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeB9CdknBSCHiKuhk4y_5orU7VgRj-BkUe9y_IivLGZwDp10zKsrxSdJxp-V0TLc0edK2d7kvhy_Tn9k2etppPExccGBY75P1ULwW2lSbCQgzG7zUS2PxBI-D2gN_c-SZBfvzMD3JYGoQLscng4XKpryZhgf_e9e_97QrHwDa4HycHm-GwfbFSRTi2s26-422aP1DoBENr6bgyDAP_GHtW8VaOhqnB_IxwTCLWOHQciU4BWqyVVrg7ydDM4yCPStDJza1QkYEOZ3d5',
  },
  {
    name: 'Tamar S.',
    role: 'Logistics',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeIh1_KU7-NC8M0IVXEnfmOTtL8Az7Awx3C2O4Qjo1PxOkeSM8WakIZBvyBudhMLY1u1YWaPGkeXMbJv0z4FI5WLPAxPcyJ-r4SkKP3gK6SqxTtfoflz7GG0wClGvAnOPyDRtacknGnEsVR-l-6VDsByb3XwW3InRkX280nnN_iIQq1uoemeMyz0BtZK7pzv1zElDHJRt0pHgxcB8snbPuUKVLwHOE7UPWDxipBtIyb3fWSVARyZdMrdbPihfQBI1QkJdNGq8s_CpA',
  },
  {
    name: 'Lasha G.',
    role: 'Marketing',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGHpD0EuaHDpdXCa1AdfXYDpaYDplbvbJFaus5lEZnPgWXJROyae4ddcnno7Wm6eHCQ3sFR8wC8qzyCyMWyYkB96CW_n7H1StCW8LxjFu5x2Dz96pRrkLooh4i4xRghzXCCQj65Oy_SctOcIq07aB7myhH3w7Fg3XctpdIPWC2FVxg7pwJRJGuEW-BGPNJ9fxU7wbFQydcVmEqNNmSrECZZal-bx0yoCRwimjudISCHAA0tV2Zq74bMW-P3YjgLHOMy8wCFJTLfoRt',
  },
];

const TeamSection: React.FC = () => (
  <section className={styles.team}>
    <h2>Meet Our Team</h2>
    <div className={styles.grid}>
      {members.map((m) => (
        <div key={m.name} className={styles.card}>
          <img src={m.img} alt={m.name} />
          <h3>{m.name}</h3>
          <p>{m.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
