/**
 * @flow
 */

import { type Context, createContext } from 'react';

export type colorSchemeType = 'light' | 'dark'

type ThemeContextType = {
  setcolorScheme: (colorScheme: colorSchemeType) => void,
  colorScheme: colorSchemeType,
}

export const ThemeContext: Context<ThemeContextType> = createContext({
  setcolorScheme: () => {},
  colorScheme: 'light',
});
