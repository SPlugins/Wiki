import React, {useEffect, useRef} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';

const AD_CLIENT = 'ca-pub-1417689167216654';

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

function waitForAdSense(callback, maxAttempts = 20) {
  let attempts = 0;
  const check = () => {
    if (window.adsbygoogle !== undefined) {
      callback();
    } else if (attempts < maxAttempts) {
      attempts++;
      setTimeout(check, 500);
    }
  };
  check();
}

export default function AdBanner({format = 'horizontal', slot = ''}) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM || pushed.current) return;

    waitForAdSense(() => {
      if (pushed.current) return;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (e) {
        // Ad blocker active or other error
      }
    });

    return () => {
      pushed.current = true;
    };
  }, []);

  const config = AD_CONFIGS[format] || AD_CONFIGS.horizontal;

  return (
    <div className={styles.adContainer}>
      <span className={styles.adLabel}>Advertisement</span>
      <ins
        className="adsbygoogle"
        ref={adRef}
        style={config.style}
        data-ad-client={AD_CLIENT}
        {...(slot && {'data-ad-slot': slot})}
        {...(config.format && {'data-ad-format': config.format})}
        {...(config.responsive && {'data-full-width-responsive': 'true'})}
        {...(config.layout && {'data-ad-layout': config.layout})}
      />
    </div>
  );
}
