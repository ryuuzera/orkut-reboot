import Head from 'next/head';
import { useState } from 'react';
import { ITheme } from '../../@types/types';
import { darkTheme } from '../../themes/theme';
import { Header } from './components/Header';

export default function Homepage() {
  const [THEME, setTHEME] = useState<ITheme>(darkTheme);
  const avatarImg = './profilepic.jpeg';

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
              <div className='avatarDiv'>
                <div className='bannerDiv'></div>
                <div className='profilePic'></div>
              </div>
              <div className='profileInfo'>
                <div className='profileInfoCard'>
                  <div className='profileName'>
                    <h3>Fagner Menezes</h3>
                    <h4>masculino,</h4>
                    <h4>em um relacionamento sério,</h4>
                    <h4>Brasil</h4>
                  </div>
                  <div className='profileEdit'>
                    <div className='horizontalLine' />
                    <div className='itemMenu'></div>
                    <div className='horizontalLine' />
                  </div>
                </div>
              </div>
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
            flex-direction: row;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 58px;
            background: rgba(255, 255, 255, 0.2);
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
            // background: pink;
            margin: 8px 0;
            border-radius: 12px;
          }
          .avatarDiv {
            width: 100%;
            height: 33%;
            // background: yellow;
          }

          .avatarDiv .bannerDiv {
            width: 100%;
            height: 35%;
            background: lime;
          }

          .avatarDiv .profilePic {
            position: relative;
            width: 145px;
            height: 145px;
            background: url(${avatarImg});
            background-size: cover;
            left: calc(50% - (144px / 2));
            bottom: calc(50% - (144px / 2));
            border: solid 1px white;
          }

          .profileInfo {
            width: calc(100% - 10px);
            height: calc(20% - 10px);
            // background: #ff00ff24;
            padding: 5px;
          }

          .profileInfoCard {
            width: 100%;
            height: 100%;
            // background: green;
          }

          .profileName {
            height: calc(70% - 6px);
            width: calc(100% - 12px);
            // background: cyan;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 3px 6px;
            gap: 2px;
          }
          .profileName h3 {
            font-size: 1em;
            font-weight: 500;
            color: ${THEME.pallete.blue['500']};
          }
          .profileName h4 {
            font-weight: 400;
            font-size: 0.85em;
            color: ${THEME.pallete.black['700']};
          }
          .profileEdit {
            width: 100%;
            height: calc(30% - 2px);
            // background: red;
            border-top: 1px solid gray;
            border-bottom: 1px solid gray;
          }

          .itemMenu {
            height: 30px;
            width: 100%;
            // background: blue;
            display: flex;
          }

          .optionsList {
            height: 47%;
            width: 100%;
            // background: #0000ff49;
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
