import type { AppProps } from 'next/app';

import React from 'react';

import '../styles/App.scss';

export default function TestApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
