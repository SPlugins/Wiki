import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';

export default function AdBanner({className = ''}) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded or blocked
    }
  }, []);

  return (
    <div className={`${styles.adContainer} ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client="ca-pub-1417689167216654"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
