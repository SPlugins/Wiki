import React, {useEffect, useRef} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';

const AD_CONFIGS = {
  horizontal: {
    format: 'auto',
    responsive: true,
    style: {display: 'block'},
  },
  inArticle: {
    format: 'fluid',
    layout: 'in-article',
    style: {display: 'block', textAlign: 'center'},
  },
  rectangle: {
    format: 'auto',
    responsive: true,
    style: {display: 'inline-block', width: '336px', height: '280px'},
  },
};

export default function AdBanner({format = 'horizontal', slot = ''}) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM || pushed.current) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (e) {
      // AdSense not loaded yet or ad blocker active
    }
  }, [slot]);

  const config = AD_CONFIGS[format] || AD_CONFIGS.horizontal;

  return (
    <div className={styles.adContainer}>
      <span className={styles.adLabel}>Advertisement</span>
      <ins
        className="adsbygoogle"
        ref={adRef}
        style={config.style}
        data-ad-client="ca-pub-1417689167216654"
        {...(slot && {'data-ad-slot': slot})}
        {...(config.format && {'data-ad-format': config.format})}
        {...(config.responsive && {'data-full-width-responsive': 'true'})}
        {...(config.layout && {'data-ad-layout': config.layout})}
      />
    </div>
  );
}
