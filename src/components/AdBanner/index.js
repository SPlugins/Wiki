import React, {useEffect, useRef, useState} from 'react';
import {useLocation} from '@docusaurus/router';
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

function waitForAdSense(callback, maxAttempts = 40) {
  let attempts = 0;
  const check = () => {
    if (window.adsbygoogle !== undefined) {
      callback();
    } else if (attempts < maxAttempts) {
      attempts++;
      setTimeout(check, 500);
    } else {
      console.warn('[AdBanner] AdSense script did not load after', maxAttempts * 500, 'ms');
    }
  };
  check();
}

export default function AdBanner({format = 'horizontal', slot = ''}) {
  const containerRef = useRef(null);
  const location = useLocation();
  // Use a key that changes on every navigation to force a fresh <ins> element
  const [adKey, setAdKey] = useState(() => location.pathname + '_' + Date.now());

  useEffect(() => {
    // Reset the ad on every route change so a fresh <ins> is created
    setAdKey(location.pathname + '_' + Date.now());
  }, [location.pathname]);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;
    if (!containerRef.current) return;

    const insEl = containerRef.current.querySelector('.adsbygoogle');
    if (!insEl) return;

    // If this <ins> was already filled by AdSense, skip
    if (insEl.dataset.adsbygoogleStatus) return;

    let cancelled = false;

    waitForAdSense(() => {
      if (cancelled) return;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn('[AdBanner] AdSense push error:', e.message);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [adKey]);

  const config = AD_CONFIGS[format] || AD_CONFIGS.horizontal;

  return (
    <div className={styles.adContainer} ref={containerRef}>
      <span className={styles.adLabel}>Advertisement</span>
      <ins
        className="adsbygoogle"
        key={adKey}
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
