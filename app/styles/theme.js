/**
 * @flow
 */

export type ThemeType = {
  textColor: string,
  backgroundColor: string,
  underlayColor: string
}

export default {
  dark: {
    textColor: 'white',
    backgroundColor: 'black',
    underlayColor: 'rgba(255, 255, 255, 0.25)',
  },
  light: {
    textColor: 'black',
    backgroundColor: 'white',
    underlayColor: 'rgba(0, 0, 0, 0.25)',
  },
};
