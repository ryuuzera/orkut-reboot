import { ReactElement } from 'react';
import { IconContext } from 'react-icons';
import { ITheme } from '../../../../../../@types/types';

interface ItemMenuProps {
  icon: ReactElement;
  label: string;
  THEME: ITheme;
  color: string;
}
export const ItemMenu = ({ icon, label, color, THEME }: ItemMenuProps) => {
  function adjustBrightness(col: any, amt: any) {
    var usePound = false;

    if (col[0] == '#') {
      col = col.slice(1);
      usePound = true;
    }

    var R = parseInt(col.substring(0, 2), 16);
    var G = parseInt(col.substring(2, 4), 16);
    var B = parseInt(col.substring(4, 6), 16);

    // to make the colour less bright than the input
    // change the following three "+" symbols to "-"
    R = R + amt;
    G = G + amt;
    B = B + amt;

    if (R > 255) R = 255;
    else if (R < 0) R = 0;

    if (G > 255) G = 255;
    else if (G < 0) G = 0;

    if (B > 255) B = 255;
    else if (B < 0) B = 0;

    var RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
    var GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
    var BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

    return (usePound ? '#' : '') + RR + GG + BB;
  }

  return (
    <>
      <div className='itemMenu'>
        <IconContext.Provider value={{ size: '1.3rem', color: THEME.pallete.primary }}>
          {icon}
          {label}
        </IconContext.Provider>
      </div>
      <style jsx>
        {`
          .itemMenu {
            font-size: 0.95rem;
            height: 30px;
            width: calc(100% - 15px);
            background: ${color};
            display: flex;
            align-items: center;
            gap: 15px;
            padding-left: 15px;
            cursor: pointer;
            color: ${THEME.pallete.font};
            transition: all 0.2s;
          }
          .itemMenu:hover {
            background: ${adjustBrightness(color, -15)};
            border-radius: 6px;
          }
        `}
      </style>
    </>
  );
};
