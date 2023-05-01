import axios from 'axios';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'next-themes';
import nProgress from 'nprogress';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import 'react-tippy/dist/tippy.css';
import '@/styles/globals.css';
import '@/styles/mdx.css';
import '@/styles/dracula.css';
import '@/styles/nprogress.css';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider attribute='class' enableSystem={false}>
        <SWRConfig
          value={{
            fetcher: (url) => axios.get(url).then((res) => res.data),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
