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
      <div className='Container'>
        <div className='Content'>
          <div className='leftContent'>
            <div className='profileContainer'>
              <div className='avatarDiv'></div>
              <div className='profileInfo'></div>
              <div className='optionsList'></div>
            </div>
          </div>
          <div className='centerContent'></div>
          <div className='rightContent'></div>
        </div>
      </div>

      <style jsx>
        {`
          .Container {
            display: flex;
            justify-content: center;
            height: 100vh;
            width: 100vw;
            // background: #ff000058;
            min-width: 1100px;
          }
          .Content {
            width: 100%;
            height: calc(100% - 58px);
            max-width: 1128px;
            background: green;
            flex-direction: row;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 58px;
            // background: rgba(255, 255, 255, 0.2);
          }
          .leftContent {
            height: 100%;
            width: 225px;
            background: white;
          }
          .profileContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 600px;
            background: pink;
            margin: 8px 0;
            border-radius: 12px;
          }
          .avatarDiv {
            width: 100%;
            height: 33%;
            background: yellow;
          }
          .profileInfo {
            width: 100%;
            height: 20%;
            background: #ff00ff24;
          }
          .optionsList {
            height: 47%;
            width: 100%;
            background: #0000ff49;
          }
          .centerContent {
            height: 100%;
            width: 570px;
            background: gray;
          }
          .rightContent {
            height: 100%;
            width: 300px;
            background: white;
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            background: ${THEME.pallete.background};
            transition: all 0.2s;
          }
        `}
      </style>
    </>
  );
}
