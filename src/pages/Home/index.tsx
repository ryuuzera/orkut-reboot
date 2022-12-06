import Head from 'next/head';
import { useState } from 'react';
import { BsCardList } from 'react-icons/bs';
import { CgFeed } from 'react-icons/cg';
import { FaFilm, FaUserAlt, FaUserEdit } from 'react-icons/fa';
import { GoNote } from 'react-icons/go';
import { MdPhotoLibrary } from 'react-icons/md';
import { SiGooglemessages, SiTinyletter } from 'react-icons/si';
import { ITheme } from '../../@types/types';
import { darkTheme } from '../../themes/theme';
import { Header } from './components/Header';
import { ItemMenu } from './components/Header/components/itemMenu';

export default function Homepage() {
  const [THEME, setTHEME] = useState<ITheme>(darkTheme);
  const avatarImg = './profilepic.jpeg';
  const bannerImg = 'banner.jpeg';

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
                    <div className='profileEdit-item'>
                      <ItemMenu label='Editar Perfil' icon={<FaUserEdit />} THEME={THEME} color={'white'} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='optionsList'>
                <ul>
                  <li>
                    <ItemMenu label='Perfil' THEME={THEME} icon={<FaUserAlt />} color={'white'} />
                    <ItemMenu label='Recados' THEME={THEME} icon={<GoNote />} color={'white'} />
                    <ItemMenu label='Álbum' THEME={THEME} icon={<MdPhotoLibrary />} color={'white'} />
                    <ItemMenu label='Videos' THEME={THEME} icon={<FaFilm />} color={'white'} />
                  </li>
                </ul>
                <ul>
                  <li>
                    <ItemMenu label='Feeds' THEME={THEME} icon={<CgFeed />} color={'white'} />
                    <ItemMenu label='Listas' THEME={THEME} icon={<BsCardList />} color={'white'} />
                    <ItemMenu label='Mensagens' THEME={THEME} icon={<SiGooglemessages />} color={'white'} />
                    <ItemMenu label='Depoimentos' THEME={THEME} icon={<SiTinyletter />} color={'white'} />
                  </li>
                </ul>
              </div>
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
            min-width: 1100px;
          }
          .Content {
            width: 100%;
            height: calc(100% - 45px);
            max-width: 1128px;
            flex-direction: row;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 45px;
             {
              /* background: rgba(255, 255, 255, 0.2); */
            }
          }
          .leftContent {
            height: calc(100vh - 48px);
            min-height: 660px;
            width: 225px;
             {
              /* background: white; */
            }
          }
          .profileContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 600px;
            margin: 8px 0;
            border-radius: 12px;
            background-color: white;
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
          .avatarDiv {
            width: 100%;
            height: 33%;
          }

          .avatarDiv .bannerDiv {
            width: 100%;
            height: 35%;
            background: url(${bannerImg});
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 12px 12px 0px 0px;
          }

          .avatarDiv .profilePic {
            position: relative;
            width: 145px;
            height: 145px;
            background: url(${avatarImg});
            background-repeat: no-repeat;
            background-size: cover;
            left: calc(50% - (144px / 2));
            bottom: calc(50% - (144px / 2));
            border: 2px solid white;
            border-radius: 12px 0px;
          }

          .profileInfo {
            width: calc(100% - 10px);
            height: calc(20% - 10px);
            padding: 5px;
          }

          .profileInfoCard {
            width: 100%;
            height: 100%;
          }

          .profileName {
            height: calc(70% - 6px);
            width: calc(100% - 12px);
             {
              /* background: cyan; */
            }
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
            width: calc(100% - 12px);
            height: calc(30% - 3px);
            padding: 0px 6px;
            // background: red;
          }

          .profileEdit-item {
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }

          .optionsList {
            display: flex;
            flex-direction: column;
            height: calc(47% - 2px);
            padding: 0px 10px;
            width: calc(100% - 20px);
             {
              /* background: #0000ff49; */
            }
            justify-content: space-evenly;
          }

          .optionsList ul {
             {
              /* background: pink; */
            }
            display: flex;
            flex-wrap: wrap;
             {
              /* height: calc(100% - 20px); */
            }
            width: 100%;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          .optionsList ul li {
            display: flex;
             {
              /* padding: 10px 0px; */
            }
             {
              /* height: calc(100% - 20px); */
            }
            flex-wrap: wrap;
            flex-direction: column;
            width: 100%;
             {
              /* background: red; */
            }
          }
          .centerContent {
            height: calc(100vh - 48px);
            min-height: 660px;
            width: 570px;
            background: gray;
          }

          .rightContent {
            height: calc(100vh - 48px);
            min-height: 660px;
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
