/* eslint-disable @next/next/no-img-element */
import { darkTheme, lightTheme } from '../../../../themes/theme';

//@ts-ignore
export const Header = (props) => {
  const logo = '/logo-svg.svg';
  return (
    <>
      <div className='Container'>
        <div className='leftContent'>
          <div className='logo'>
            <div
              className='imgContainer'
              onClick={() => {
                props.setTHEME(props.theme === darkTheme ? lightTheme : darkTheme);
              }}>
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
        <div className='rightContent'></div>
      </div>
      <style jsx>{`
        .Container {
          display: flex;
          flex-direction: row;
          height: 58px;
          width: 100%;
          background: ${props.theme.pallete.blue['500']};
        }
        .leftContent {
          width: 70%;
          height: 100%;
          display: flex;
          flex-direction: row;
        }
        .leftContent .options {
          display: flex;
          width: 80%;
          min-width: 550px;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: flex-start;
          margin: 0 0 0 30px;
          gap: 20px;
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
          min-width: 400px;
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
          height: 80%;
          width: 80%;
          align-items: center;
          justify-content: center;
          display: flex;
          border-radius: 8px;
        }
        .logo .imgContainer img {
          height: 30px;
        }
      `}</style>
    </>
  );
};
