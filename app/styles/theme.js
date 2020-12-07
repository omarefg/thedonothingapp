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
    textColor: '#eeeeee',
    backgroundColor: '#0F171C',
    underlayColor: 'rgba(255, 255, 255, 0.25)',
  },
  light: {
    textColor: '#0F171C',
    backgroundColor: '#eeeeee',
    underlayColor: 'rgba(0, 0, 0, 0.25)',
  },
};
