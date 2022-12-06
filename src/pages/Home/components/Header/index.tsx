/* eslint-disable @next/next/no-img-element */
import { Switch } from '@nextui-org/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { darkTheme, lightTheme } from '../../../../themes/theme';

//@ts-ignore
export const Header = (props) => {
  const handleTheme = () => {
    props.setTHEME(props.theme === darkTheme ? lightTheme : darkTheme);
  };
  const logo = '/logo-svg.svg';
  return (
    <>
      <div className='Base'>
        <div className='Container'>
          <div className='leftContent'>
            <div className='logo'>
              <div className='imgContainer' onClick={handleTheme}>
                <img src={logo} alt='logo' />
              </div>
            </div>
            <ul className='options'>
              <li>Inicio</li>
              <li>Perfil</li>
              <li>Página de Recados</li>
              <li>Amigos</li>
              <li>Comunidades</li>
            </ul>
          </div>
          <div className='rightContent'>
            <Switch
              onChange={handleTheme}
              checked={props.theme === darkTheme ? false : true}
              iconOn={<FaSun />}
              size='md'
              iconOff={<FaMoon />}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .Base {
          height: 45px;
          width: 100%;
          position: fixed;
          display: flex;
          flex-direction: row;
          justify-content: center;
          top: 0;
          min-width: 1100px;
          background: ${props.theme.pallete.blue['500']};
        }
        .Container {
          height: 100%;
          width: 100%;
          max-width: 1128px;
          display: flex;

          /* background: green; */
        }
        .leftContent {
          width: 70%;
          height: 100%;
          display: flex;
          flex-direction: row;
          /* background: cyan; */
        }
        .leftContent .options {
          display: flex;
          width: 80%;
          min-width: 550px;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: flex-start;
          margin: 0 0 0 30px;
          gap: 25px;
          align-text: center;
          height: 100%;
          color: ${props.theme.pallete.blue['300']};
          text-align: center;
          align-items: center;
          font-size: 1.3rem;
        }
        .leftContent .options li {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .leftContent .options li:hover {
          color: rgb(237, 37, 144);
        }
        .rightContent {
          width: 30%;
          height: 100%;
          /* background: pink; */
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .logo {
          display: flex;
          width: 150px;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
        .logo .imgContainer {
          background: ${props.theme.pallete.blue['300']};
          height: 70%;
          width: 70%;
          align-items: center;
          justify-content: center;
          display: flex;
          border-radius: 8px 0px;
        }
        .logo .imgContainer img {
          height: 25px;
        }
      `}</style>
    </>
  );
};
