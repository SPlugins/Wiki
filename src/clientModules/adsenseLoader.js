// Only load AdSense on desktop devices (screen wider than 768px)
if (typeof window !== 'undefined' && window.innerWidth > 768) {
  const script = document.createElement('script');
  script.src =
    'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1417689167216654';
  script.async = true;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}
