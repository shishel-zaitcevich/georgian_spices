import React from 'react';
import styles from './SpiceGallery.module.scss';

const SpiceGallery: React.FC = () => {
  return (
    <div className={styles.gallery}>
      {/* <div
        className={styles.mainImage}
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtDAhtmIJEdzq3ai4XQCdUAn7Fwyi4O2zcLjHm1Orl0iU_tTbeCy5Hnc0cyd6ShXMFTC116PjDdn68GmCqUmciJOSrs1SJAsNXkhyJv9RHMEfrXGxOtmeVYmWDIGi77Ed70iyJUXYdPRHO2mJe8kHiEhky07wNnfVBgF-rhejirhvfxjjYh-ViXg9sZ36-7wYyQeA3-cUpISyiukEWX9DRlfskufMfgVc1J7n1XebG9dgqi7CGdzeQB7GJUJV9rpXhTfvZpGAWIyju")`,
        }}
      ></div> */}

      <div className={styles.thumbnails}>
        {[
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD_dUALjiO3PylS0ZTB1VgY9jX1W9_OpkzLdSLpqbJk9AjFqpVcCFThhbvNVAdROOahLqbXEsIccdwqCiGgMGzlI6-iNOYYR38_57G58yJywTxB0tsf7oINQonIhYc6d1O3eCo0cEaAhOY2kVG3LL_iIjlr8nUKHr-w_tHgi1cPu-H2zCVstyzuObbawKyrBTugHHviSP-gTblVGPF5etswhlmmkWdiRB0fiTlxpFWv5OGOD9e8NVnl9PWcRs7Icgi4wlKOXc787D1O',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA3j0ftrI9DGN-72MYynhYFwzNGv3sahhkafbZAPzsfTnChekzZVFYmF3EKnxSw8DPuzvxfroOZYBZKH7fDDMDPqHWotTMcBT_ca70h9XhJ-uJdL9J9PMz5g9BG8ax02bsYvpOEhQVvwh_RgNtHTlrIlz1NlrYAyugEdNaSBjKNCbPqcGpbW8ZpvSCH3Fn5BbgD-Vzi2V4vEKtH8aUkf1M9daCZRMIBRKrQHn3SKnzYwVojry9vGX0d-XN3sOq9gCB__huBCAVrAFV4',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB0aCS977gQ1k9XqqHxDk2mKlgFX01But3fPQ9JszMMzcjlS-Anr0LlZXV-rCx79dJMF37viHzMkBaq9q7MqWuSR9KrwXoTvgnEXmfzGpxRg-bb558FzZlvMJVKNZ-YWD1YXtjOYrK0LxRWvtiJYF-AxS0Gj0aGtFxD18WXDvyMvMcbLjPMdLqRWTz7STa3LJzDfgF0KKpllaUt3DsRFgKwDL8ltgC2TTMOIgtAiN5qLT_7ipIvLgTkSysFyjbxiCjpleF6NREOxab6',
        ].map((src, i) => (
          <button key={i} className={styles.thumb}>
            <img src={src} alt={`Thumbnail ${i + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpiceGallery;
