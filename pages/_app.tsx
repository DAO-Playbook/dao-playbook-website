import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Head from 'next/head';
import { META_IMAGE_URL, TWITTER_URL } from '@data/constants';

import '../styles/main.scss';

const baskervville = localFont({
  src: [
    {
      path: '../public/fonts/Baskervville-Regular.woff',
      weight: '400',
    },
    {
      path: '../public/fonts/Baskervville-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/Baskervville-Italic.woff',
      weight: '400',
    },
    {
      path: '../public/fonts/Baskervville-Italic.woff2',
      weight: '400',
    },
  ],
});

const gTAmericaMono = localFont({
  src: [
    {
      path: '../public/fonts/GTAmericaMono-Regular.woff',
      weight: '400',
    },
    {
      path: '../public/fonts/GTAmericaMono-Regular.woff2',
      weight: '400',
    },
  ],
});

function MyApp({ Component, pageProps }: AppProps) {
  const metaImage = META_IMAGE_URL;
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Dao Playbook' />
        <meta property='og:image' content={metaImage} />
        <meta name='twitter:creator' content={TWITTER_URL} />
        <meta name='twitter:site' content='@brassbanking' />
        <meta name='twitter:image:src' content={metaImage} />
        <meta name='robots' content='max-image-preview:large' />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/icons/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/icons/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/icons/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/icons/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/icons/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/icons/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/icons/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/icons/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/icons/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/icons/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta
          name='msapplication-TileImage'
          content='/icons/ms-icon-144x144.png'
        />
        <meta name='theme-color' content='#ffffff'></meta>
        <style jsx global>{`
          :root {
            /* ... */
            --baskervville-font: ${baskervville.style.fontFamily};
            --gTAmericaMono-font: ${gTAmericaMono.style.fontFamily};
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
