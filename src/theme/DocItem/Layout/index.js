import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDocSidebarItemsExpandedState} from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import styles from './styles.module.css';
import GiscusComments from '@site/src/components/GiscusComments';
import AdBanner from '@site/src/components/AdBanner';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();

  // Check if comments should be hidden for this specific page
  const {frontMatter} = useDoc();
  const hideComments = frontMatter.hide_comments || false;

  // Don't show comments on demo pages (they might have their own comments setup)
  const isDemoPage = metadata.permalink?.includes('/demo/');

  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
        <AdBanner />
        {/* Add Giscus comments to all doc pages except demo pages and pages with hide_comments: true */}
        {!hideComments && !isDemoPage && (
          <div style={{ marginTop: '3rem' }}>
            <GiscusComments enabled={true} />
          </div>
        )}
      </div>
      {docTOC.desktop && (
        <div className="col col--3">
          {docTOC.desktop}
          <AdBanner format="rectangle" />
        </div>
      )}
    </div>
  );
}