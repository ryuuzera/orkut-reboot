import { ITheme } from '../@types/types';

export const darkTheme: ITheme = {
  mode: 'dark',
  pallete: {
    background: 'rgb(25, 25, 25)',
    primary: 'rgb(233, 91, 149)',
    secondary: 'rgb(246, 236, 178)',
    font: 'black',
    white: '#fff',
    blue: {
      300: 'rgb(214, 220, 240)',
      500: 'rgb(49, 93, 130)',
    },
    pink: {
      100: 'rgb(255, 98, 141)',
      200: 'rgb(255, 99, 152)',
      300: 'rgb(233, 91, 149)',
      400: 'rgb(204, 78, 112)',
      500: 'rgb(127, 48, 70)',
    },
  },
};

export const lightTheme: ITheme = {
  mode: 'light',
  pallete: {
    background: 'rgb(218, 230, 245)',
    primary: 'rgb(233, 91, 149)',
    secondary: 'rgb(246, 236, 178)',
    font: 'white',
    white: '#fff',
    blue: {
      300: 'rgb(226, 232, 253)',
      500: 'rgb(69, 130, 181)',
    },
    pink: {
      100: 'rgb(255, 98, 141)',
      200: 'rgb(255, 99, 152)',
      300: 'rgb(233, 91, 149)',
      400: 'rgb(204, 78, 112)',
      500: 'rgb(127, 48, 70)',
    },
  },
};
