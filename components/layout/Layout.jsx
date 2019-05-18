import Head from 'next/head';

import "./reset.scss";
import "./typography.scss";

const Layout = ({ children }) => <>
  <Head>
    <title>TrueFootprint</title>

    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700" rel="stylesheet" />
    <link href="/static/images/apple-touch-icon.png" rel="apple-touch-icon" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  </Head>

  {children}
</>;

export default Layout;
