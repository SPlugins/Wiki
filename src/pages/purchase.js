import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import styles from './purchase.module.css';
import AdBanner from '@site/src/components/AdBanner';

export default function Purchase() {
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
      title="Purchase Plugins"
      description="Explore and purchase Score Plugins for your Minecraft server">
      <div className={styles.purchaseContainer}>
        <div className={styles.header}>
          <h1>Ssomar's Plugins Store</h1>
          <p className={styles.subtitle}>
            Explore a collection of plugins you could buy for your minecraft server!
          </p>
          <div className={styles.storeLinks}>
            <a href="https://www.spigotmc.org/resources/authors/ssomar.641604/" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-faucet"></i> Spigot
            </a>
            <a href="https://polymart.org/user/ssomar.14534" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-p"></i> Polymart
            </a>
            <a href="https://builtbybit.com/creators/ssomar.152843/" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-hammer"></i> BuiltByBit
            </a>
            <a href="https://modrinth.com/user/Ssomar" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-cube"></i> Modrinth
            </a>
            <a href="https://mcmodels.net/vendors/249/ssomar-plugins" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-box"></i> MCModels
            </a>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.pluginsBox}>
            <h2 className={styles.sectionTitle}>ExecutableItems Packs</h2>
            <stripe-pricing-table
              pricing-table-id="prctbl_1QYQhECPJh2RnYCRctL32h2n"
              publishable-key="pk_live_c9vD7kvsJbPWGpGmGzXq7FcE">
            </stripe-pricing-table>
            <br />
            <stripe-pricing-table
              pricing-table-id="prctbl_1RAQi3CPJh2RnYCRkv92rm2X"
              publishable-key="pk_live_c9vD7kvsJbPWGpGmGzXq7FcE">
            </stripe-pricing-table>
            <br />
            <stripe-pricing-table
              pricing-table-id="prctbl_1T3fzbCPJh2RnYCR9WijoqqB"
              publishable-key="pk_live_c9vD7kvsJbPWGpGmGzXq7FcE">
            </stripe-pricing-table>
          </div>
        </section>

        <AdBanner format="inArticle" />

        <section className={styles.section}>
          <div className={styles.pluginsBox}>
            <h2 className={styles.sectionTitle}>Explore Plugins</h2>
            <stripe-pricing-table
              pricing-table-id="prctbl_1NXTxzCPJh2RnYCRWAEDHzxJ"
              publishable-key="pk_live_c9vD7kvsJbPWGpGmGzXq7FcE">
            </stripe-pricing-table>
          </div>

          <div className={styles.featuredBox}>
            <h2 className={styles.sectionTitle}>Bundles</h2>
            <p className={styles.bundleDescription}>Want a bundle with all plugins at a cheaper price?</p>
            <stripe-pricing-table
              pricing-table-id="prctbl_1NB0AwCPJh2RnYCRYHhchxuh"
              publishable-key="pk_live_c9vD7kvsJbPWGpGmGzXq7FcE">
            </stripe-pricing-table>
          </div>
        </section>
      </div>
    </Layout>
  );
}
