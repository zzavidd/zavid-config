import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';
import React from 'react';

import 'styles/App.scss';

export default function TestApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
