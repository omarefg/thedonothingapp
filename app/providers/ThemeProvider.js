/**
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, useColorScheme } from 'react-native';
import type { colorSchemeType } from '../contexts/ThemeContext';
import { ThemeContext } from '../contexts';
import { AsyncStorageHelper } from '../helpers/AsyncStorageHelper';
import { CONFIG_STORAGE_COLOR_SCHEME } from '../constants';

type ThemeProviderProps = {
  children: React$Node
}

export function ThemeProvider(props: ThemeProviderProps): React$Node {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(false);
  const phoneColorScheme = useColorScheme();
  const [colorScheme, setcolorScheme] = useState<colorSchemeType>(phoneColorScheme);

  const setInitialColorSchema = async () => {
    setIsLoading(true);
    const colorSchemeFromSystem = await AsyncStorageHelper
      .getStoredData(CONFIG_STORAGE_COLOR_SCHEME);
    if (colorSchemeFromSystem) {
      setcolorScheme(colorSchemeFromSystem);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setInitialColorSchema();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeContext.Provider value={{ colorScheme, setcolorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
