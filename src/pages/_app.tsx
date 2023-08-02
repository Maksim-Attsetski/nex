import { Suspense, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

import { Header, Loading } from '@/shared';
import '@/styles/globals.scss';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
// });

export default function App({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', () => setIsLoading(false)); // If the component is unmounted, unsubscribe

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Header />
      <AnimatePresence mode='wait' initial={true}>
        {isLoading ? (
          <Loading />
        ) : (
          <Component {...pageProps} key={router.asPath} />
        )}
      </AnimatePresence>
    </div>
  );
}
