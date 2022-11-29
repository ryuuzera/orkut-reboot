import Head from 'next/head';
import { useState } from 'react';
import { ITheme } from '../../@types/types';
import { darkTheme } from '../../themes/theme';
import { Header } from './components/Header';

export default function Homepage() {
  const [THEME, setTHEME] = useState<ITheme>(darkTheme);

  return (
    <>
      <Head>
        <title>Orkut</title>
        <meta name='description' content='Orkut made by fan' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header theme={THEME} setTHEME={setTHEME} />
      <style jsx global>
        {`
          body {
            background: ${THEME.pallete.background};
          }
        `}
      </style>
    </>
  );
}
