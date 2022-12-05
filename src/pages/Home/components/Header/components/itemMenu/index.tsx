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
  return (
    <>
      <div className='itemMenu'>
        <IconContext.Provider value={{ size: '1.5rem', color: THEME.pallete.pink['100'] }}>
          {icon}
          {label}
        </IconContext.Provider>
      </div>
      <style jsx>
        {`
          .itemMenu {
            height: 30px;
            width: calc(100% - 15px);
            background: ${color};
            display: flex;
            align-items: center;
            gap: 15px;
            padding-left: 15px;
          }
        `}
      </style>
    </>
  );
};
