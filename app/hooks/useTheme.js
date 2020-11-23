/**
 * @flow
 */

import { useContext } from 'react';
import { ThemeContext } from '../contexts';
import theme, { type ThemeType } from '../styles/theme';
import type { colorSchemeType } from '../contexts/ThemeContext';

type UseThemeType = {
  setcolorScheme: (colorScheme: colorSchemeType) => void,
  colorScheme: colorSchemeType,
  theme: ThemeType
}

export const useTheme = (): UseThemeType => {
  const { colorScheme, setcolorScheme } = useContext(ThemeContext);

  return {
    setcolorScheme,
    colorScheme,
    theme: theme[colorScheme],
  };
};
