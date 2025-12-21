import React from 'react';
import styles from './StorySection.module.scss';

const StorySection: React.FC = () => (
  <section className={styles.story}>
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.text}>
        <span className={styles.subtitle}>Our Heritage</span>
        <h2>Rooted in Tradition</h2>
        <p>
          Our journey began in the hills of Georgia, where spice blending is an art passed through
          generations...
        </p>
        {/* <div className={styles.team}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkn4Jd3s7Y30kwEEE5DtnDBRIpZnUkdvT0ilmrylGMqmzVfVwsv5_wPzGJEBqcOP2u-3nsaXidbRvcoCnY4PMawacoP_Gem1NQ8xRhL9OBCSBJGFr6WWBL96z8xi3sqoj1cyn4Zzl3Jdwu4-V1L9_puA0aGbb1vlviYgCyyQl6_vP_2-fEKf46-r2W4jk3qc-oia1Seg5N9tbsCITj4nMZioAUlk1F9av8HaZC_NiqIDYNHl_cCbUicXplEKhgK_k4sGk1ACcgURLZ"
            alt="Team"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOq2dpHZREgZgLwicFJ78eMTnsGRpePki7cN_YKm2s4tHSYjVBZAg4A9skyzMr1r96Gy9fnU789Em98GekH7lKmLsm7yU4GokI3eOZHYFDDHWf4JlQy4Bm89-1oHvR_U45TFC-9wALhGqKgRuzR4h8dAr9sgUf8UCjezyZX93PBDZs5whEaNPukPzruFQFd5o2EJDQlalJm4k-46Qq-RlkUxUgmLQx6Z-pOsjxNrGYnQ2oMbLobdp6wog8reanhMw7Rz43Rfglwzs5"
            alt="Team"
          />
          <span>Join 10k+ happy home cooks</span>
        </div> */}
      </div>
    </div>
  </section>
);

export default StorySection;
