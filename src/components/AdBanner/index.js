import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';

export default function AdBanner({format = 'auto', className = ''}) {
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

  const style =
    format === 'horizontal'
      ? {display: 'block', width: '100%', height: '90px'}
      : format === 'rectangle'
      ? {display: 'inline-block', width: '336px', height: '280px'}
      : {display: 'block'};

  return (
    <div className={`${styles.adContainer} ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-1417689167216654"
        data-ad-format={format === 'auto' ? 'auto' : undefined}
        data-full-width-responsive={format === 'auto' ? 'true' : undefined}
      />
    </div>
  );
}
