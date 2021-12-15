// our-domain.com/news

import { Fragment } from "react";
import Link from 'next/link';

function NewsPage() {
  return (
    <Fragment>
      <h1>The Page of News - Using React Fragment</h1>

      <ul>
        <li>
          <Link href='/news/news_nested'>
            News Nested
          </Link>
        </li>
        
        <li>
          <Link href='/news/something'>
            Dynamic Nested
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
