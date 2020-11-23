/**
 * @flow
 */

import * as React from 'react';

export type colorSchemeType = 'light' | 'dark'

type ThemeContextType = {
  setcolorScheme: (colorScheme: colorSchemeType) => void,
  colorScheme: colorSchemeType,
}

export const ThemeContext: React.Context<ThemeContextType> = React.createContext<ThemeContextType>({
  setcolorScheme: () => {},
  colorScheme: 'light',
});
