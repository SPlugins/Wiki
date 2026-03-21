import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const plugins = [
  {
    title: 'ExecutableItems',
    description: 'Create custom items with advanced features, commands, and behaviors for your Minecraft server.',
    link: '/executableitems/information-ei',
    icon: '/img/Executable%20Items%20Color3.png',
  },
  {
    title: 'ExecutableBlocks',
    description: 'Design custom blocks with unique functionalities and interactive features.',
    link: '/executableblocks/information-eb',
    icon: '/img/ExecutableBlocks (64x64)px.png',
  },
  {
    title: 'ExecutableEvents',
    description: 'Set up custom events and triggers to enhance your server gameplay experience.',
    link: '/executableevents/information-ee',
    icon: '/img/Executable_Events_Icon-removebg-preview.png',
  },
  {
    title: 'MyFurniture',
    description: 'Add custom furniture and decorative elements to enrich your Minecraft world.',
    link: '/myfurniture/information-mf',
    icon: '/img/ChatGPT Image 29 mars 2025, 22_44_46(1).png',
  },
  {
    title: 'ExecutableCrafting',
    description: 'Create custom crafting recipes with advanced conditions and outputs.',
    link: '/executablecrafting/information-ec',
    icon: '/img/ChatGPT_Image_5_mai_2025__14_54_10-removebg-preview(1).png',
  },
  {
    title: 'AI Chat Moderation',
    description: 'Intelligent chat moderation powered by AI to keep your server chat clean and safe.',
    link: '/ai-chat-moderation/information-acm',
    icon: '/img/logo_aicm.png',
  },
  {
    title: 'CustomPiglinsTrades',
    description: 'Customize Piglin bartering trades with your own items and exchange rates.',
    link: '/custompiglinstrades/information-cpt',
    icon: '/img/logo_cpt.png',
  },
  {
    title: 'ScreenShop',
    description: 'Create immersive shop interfaces with custom screens and menus.',
    link: '/screenshop/information-screenshop',
    icon: '🛒',
  },
];

function PluginCard({title, description, link, icon}) {
  const isImage = icon.startsWith('/img/');

  return (
    <Link to={link} className={styles.pluginCard}>
      <div className={styles.cardIcon}>
        {isImage ? (
          <img src={icon} alt={`${title} logo`} className={styles.pluginIcon} />
        ) : (
          icon
        )}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardArrow}>→</div>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Complete documentation for Score Plugins - ExecutableItems, ExecutableBlocks, ExecutableEvents, and more">
      <main className={styles.mainContainer}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Score Plugins Wiki</h1>
          <p className={styles.heroSubtitle}>
            Complete documentation for ExecutableItems, ExecutableBlocks, ExecutableEvents, and more
          </p>
        </div>

        <div className={styles.pluginsGrid}>
          {plugins.map((plugin, idx) => (
            <PluginCard key={idx} {...plugin} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
