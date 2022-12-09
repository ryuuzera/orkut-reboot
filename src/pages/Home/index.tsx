import Head from 'next/head';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillHeart, AiFillStar, AiFillVideoCamera } from 'react-icons/ai';
import { BiMessageAltEdit } from 'react-icons/bi';
import { BsCardList } from 'react-icons/bs';
import { CgFeed } from 'react-icons/cg';
import { FaFilm, FaUserAlt, FaUserEdit } from 'react-icons/fa';
import { GiIceCube } from 'react-icons/gi';
import { GoNote } from 'react-icons/go';
import { MdPhotoCamera, MdPhotoLibrary } from 'react-icons/md';
import { SiGooglemessages, SiTinyletter } from 'react-icons/si';
import { TiStar } from 'react-icons/ti';
import { ITheme } from '../../@types/types';
import { darkTheme } from '../../themes/theme';
import { Header } from './components/Header';
import { ItemMenu } from './components/Header/components/itemMenu';

export default function Homepage() {
  const [THEME, setTHEME] = useState<ITheme>(darkTheme);
  const avatarImg = './profilepic.jpeg';
  const bannerImg = 'banner.jpeg';
  const buddyPoke =
    'https://lh4.ggpht.com/_PK-_LU5xkbA/SjvM22YhEgI/AAAAAAAAACE/JGvFAeCcTtQ/s800/buddypokeanimated001.gif';

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
                    <h4>Rio claro,</h4>
                    <h4>Brasil</h4>
                  </div>
                  <div className='profileEdit'>
                    <div className='profileEdit-item'>
                      <ItemMenu label='Editar Perfil' icon={<FaUserEdit />} THEME={THEME} color={THEME.pallete.white} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='optionsList'>
                <ul>
                  <li>
                    <ItemMenu label='Perfil' THEME={THEME} icon={<FaUserAlt />} color={THEME.pallete.white} />
                    <ItemMenu label='Recados' THEME={THEME} icon={<GoNote />} color={THEME.pallete.white} />
                    <ItemMenu label='Álbum' THEME={THEME} icon={<MdPhotoLibrary />} color={THEME.pallete.white} />
                    <ItemMenu label='Videos' THEME={THEME} icon={<FaFilm />} color={THEME.pallete.white} />
                  </li>
                </ul>
                <ul>
                  <li>
                    <ItemMenu label='Feeds' THEME={THEME} icon={<CgFeed />} color={THEME.pallete.white} />
                    <ItemMenu label='Listas' THEME={THEME} icon={<BsCardList />} color={THEME.pallete.white} />
                    <ItemMenu label='Mensagens' THEME={THEME} icon={<SiGooglemessages />} color={THEME.pallete.white} />
                    <ItemMenu label='Depoimentos' THEME={THEME} icon={<SiTinyletter />} color={THEME.pallete.white} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='centerContent'>
            <div className='feed'>
              <div className='profileName-title'>
                <h1>Fagner Menezes</h1>
              </div>
              <div className='breadCrumb'>
                <p>Home {'>'} Perfil</p>
              </div>
              <div className='profileDescription'>
                <div className='card'>
                  <h2>feito de histórias</h2>
                  <button>
                    <p>Editar</p>
                  </button>
                </div>
              </div>
              <div className='profileStatus'>
                <ul className='status'>
                  <IconContext.Provider value={{ size: '1.3rem' }}>
                    <li className='item-status'>
                      <p>recados</p>
                      <div style={{ display: 'flex', gap: '2px', flexDirection: 'row', alignItems: 'center' }}>
                        <BiMessageAltEdit color={THEME.pallete.blue['500']} />
                        <p>25</p>
                      </div>
                    </li>
                    <li className='item-status'>
                      {' '}
                      <p>fotos</p>
                      <div style={{ display: 'flex', gap: '2px', flexDirection: 'row', alignItems: 'center' }}>
                        <MdPhotoCamera color={THEME.pallete.blue['500']} />
                        <p>25</p>
                      </div>
                    </li>
                    <li className='item-status'>
                      {' '}
                      <p>vídeos</p>
                      <div style={{ display: 'flex', gap: '2px', flexDirection: 'row', alignItems: 'center' }}>
                        <AiFillVideoCamera color={THEME.pallete.blue['500']} />
                        <p>25</p>
                      </div>
                    </li>
                    <li className='item-status'>
                      {' '}
                      <p>fãs</p>
                      <div style={{ display: 'flex', gap: '2px', flexDirection: 'row', alignItems: 'center' }}>
                        <AiFillStar color={THEME.pallete.blue['500']} />
                        <p>25</p>
                      </div>
                    </li>
                    <li className='item-status'>
                      {' '}
                      <p>confiável</p>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <TiStar color='rgb(255, 241, 81)' />
                        <TiStar color='rgb(255, 241, 81)' />
                        <TiStar color='rgb(255, 241, 81)' />
                      </div>
                    </li>
                    <li className='item-status'>
                      {' '}
                      <p>sexy</p>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <GiIceCube color='rgba(81, 200, 255, 0.582)' />
                        <GiIceCube color='rgba(81, 200, 255, 0.582)' />
                        <GiIceCube color='rgba(81, 200, 255, 0.582)' />
                      </div>
                    </li>
                    <li className='item-status'>
                      {' '}
                      <p>legal</p>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <AiFillHeart color='rgba(231, 137, 184, 0.781)' />
                        <AiFillHeart color='rgba(231, 137, 184, 0.781)' />
                        <AiFillHeart color='rgba(231, 137, 184, 0.781)' />
                      </div>
                    </li>
                  </IconContext.Provider>
                </ul>
              </div>
              <div className='profileInfoContent'>
                <div className='profileInfoContainer'>
                  <table className='profileTable'>
                    <tr className='even'>
                      <td className='left'>relacionamento:</td>
                      <td className='right'>em um relacionamento sério</td>
                    </tr>
                    <tr className='odd'>
                      <td className='left'>aniversário</td>
                      <td className='right'>24 agosto</td>
                    </tr>
                    <tr className='even'>
                      <td className='left'>interesses no orkut:</td>
                      <td className='right'>javascript, typescript e react</td>
                    </tr>
                    <tr className='odd'>
                      <td className='left'>quem sou eu:</td>
                      <td className='right'>
                        Estudante de computação desde o nascimento, apaixonado por tecnologia e tudo que é movido por
                        ela.
                      </td>
                    </tr>
                    <tr className='even'>
                      <td className='left'>cidade natal:</td>
                      <td className='right'>rio claro, sp</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className='rightContent'>
            <div className='rightBox'>
              <img src={buddyPoke} alt='buddy-poke' />
            </div>
          </div>
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
          }
          .leftContent {
            height: calc(100vh - 48px);
            min-height: 660px;
            width: 225px;
          }
          .profileContainer {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 600px;
            margin: 8px 0;
            border-radius: 12px;
            background-color: ${THEME.pallete.white};
            transition: all 0.2s;
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
          .avatarDiv {
            width: 100%;
            height: 33%;
          }
          .avatarDiv .bannerDiv {
            width: 100%;
            height: 39%;
            background: url(${bannerImg});
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 12px 12px 0px 0px;
          }
          .avatarDiv .profilePic {
            position: relative;
            width: 140px;
            height: 140px;
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
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 3px 6px;
            gap: 2px;
            margin: 4px 0px;
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
          }

          .profileEdit-item {
             {
              /* border-top: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
            }
          }
          .optionsList {
            display: flex;
            flex-direction: column;
            height: calc(47% - 2px);
            padding: 0px 10px;
            width: calc(100% - 20px);
            justify-content: space-evenly;
          }

          .optionsList ul {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
          }
          .optionsList ul li {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            width: 100%;
          }
          .centerContent {
            height: calc(100vh - 48px);
            min-height: 660px;
            width: 570px;
          }
          .centerContent .feed {
            min-height: 650px;
            background: ${THEME.pallete.white};
            display: flex;
            flex-direction: column;
            width: 100%;
            height: max-content;
            margin: 8px 0;
            border-radius: 12px;
            background-color: ${THEME.pallete.white};
            transition: all 0.2s;
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
          .centerContent .feed .profileName-title {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-size: 1.6rem;
            margin: 0.8rem 1rem;
          }
          .centerContent .feed .profileName-title h1 {
            font-weight: 400;
            letter-spacing: 0.1rem;
            color: ${THEME.pallete.font};
          }

          .centerContent .feed .breadCrumb {
            margin: 0px 1rem 0.8rem 1rem;
          }
          .centerContent .feed .profileDescription {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 95%;
            align-self: center;
          }
          .centerContent .feed .profileDescription .card {
            display: flex;
            flex-direction: row;
            align-items: center;
            border: 0.1rem solid ${THEME.pallete.black['800']};
            border-radius: 6px;
            width: 100%;
            padding: 0.5rem;
          }
          .centerContent .feed .profileDescription .card h2 {
            width: 85%;
            font-weight: 400;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 0.5rem;
            color: ${THEME.pallete.font};
          }
          .centerContent .feed .profileDescription .card button {
            width: 15%;
            height: 24px;
            padding: 1rem;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${THEME.pallete.blue['500']};
            background: ${THEME.pallete.white};
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
          }
          .centerContent .feed .profileStatus {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 15px;
            padding: 19px 0;
            border-bottom: 1px solid ${THEME.pallete.black['800']};
            border-top: 1px solid ${THEME.pallete.black['800']};
          }
          .centerContent .feed .profileStatus ul {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          }

          .centerContent .feed .profileStatus ul li {
            display: flex;
            flex-direction: column;
            min-width: 60px;
            gap: 3px;
          }

          .centerContent .feed .profileStatus ul li p {
            font-weight: 400;
          }
          .centerContent .feed .profileDescription .card button:hover {
            background: ${THEME.pallete.black['900']};
            color: ${THEME.pallete.blue['600']};
          }
          .centerContent .profileInfoContent {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .centerContent .profileInfoContent .profileInfoContainer {
            width: calc(100% - 40px);
            height: calc(100% - 40px);
            padding: 20px 0px;
          }

          .centerContent .profileInfoContent table {
            border-radius: 12px;
            width: 100%;
          }

          td {
            padding: 8px;
            line-height: 1.3;
          }
          .centerContent .profileInfoContent table .left {
            color: ${THEME.pallete.black['700']};
            text-align: right;
            font-weight: 400;
          }
          .centerContent .profileInfoContent table .right {
            color: ${THEME.pallete.black['300']};
            text-align: left;
            font-weight: 400;
          }
          .even {
            background: #e0edfd;
          }
          .odd {
            background: #eef8fe;
          }
          .rightContent {
            height: calc(100vh - 48px);
            min-height: 660px;
            width: 300px;
            transition: all 0.2s;
          }
          .rightContent .rightBox {
            min-height: 600px;
            background: ${THEME.pallete.white};
            display: flex;
            flex-direction: column;
            width: 100%;
            height: max-content;
            margin: 8px 0;
            border-radius: 12px;
            background-color: ${THEME.pallete.white};
            transition: all 0.2s;
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
          .rightContent .rightBox img {
            position: relative;
            top: 5rem;
            width: 300px;
            left: calc(50% - 150px);
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
