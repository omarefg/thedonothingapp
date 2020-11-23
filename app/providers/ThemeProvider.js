/**
 * @flow
 */

import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
import type { colorSchemeType } from '../contexts/ThemeContext';
import { ThemeContext } from '../contexts';

type ThemeProviderProps = {
  children: React$Node
}

export function ThemeProvider(props: ThemeProviderProps): React$Node {
  const { children } = props;
  const phoneColorScheme = useColorScheme();
  const [colorScheme, setcolorScheme] = useState<colorSchemeType>(phoneColorScheme);

  return (
    <ThemeContext.Provider value={{ colorScheme, setcolorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
