import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import styles from './blackfriday.module.css';

export default function BlackFriday() {
  useEffect(() => {
    // Load Stripe pricing table script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Layout
      title="Black Friday Sale"
      description="Black Friday special deals on Score Plugins for your Minecraft server">
      <div className={styles.blackfridayContainer}>
        <div className={styles.header}>
          <div className={styles.saleTag}>LIMITED TIME OFFER</div>
          <h1 className={styles.mainTitle}>
            <span className={styles.blackText}>BLACK</span>
            <span className={styles.fridayText}>FRIDAY</span>
          </h1>
          <p className={styles.subtitle}>
            Exclusive deals on premium Minecraft plugins!
          </p>
          <div className={styles.discountBadge}>
            <span className={styles.discountAmount}>SPECIAL DEALS</span>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.dealsBox}>
            <div className={styles.sparkles}></div>
            <h2 className={styles.sectionTitle}>Black Friday Deals</h2>
            <stripe-pricing-table
              pricing-table-id="prctbl_1SWOu8CPJh2RnYCROyV3NASk"
              publishable-key="pk_live_c9vD7kvsJbPWGpGmGzXq7FcE">
            </stripe-pricing-table>
          </div>
        </section>
      </div>
    </Layout>
  );
}
