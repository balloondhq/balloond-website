import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle="Balloon'd - Pop into Something Real"
        description="A playful way to meet real matches. Voice pops, video intros, and smart matching for genuine connections."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://balloond.com/',
          siteName: 'Balloon\'d',
          images: [
            {
              url: 'https://balloond.com/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Balloon\'d Dating App',
            },
          ],
        }}
        twitter={{
          handle: '@balloond',
          site: '@balloond',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
