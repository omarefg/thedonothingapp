/**
 * @flow
 */

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BooleanInput } from '../../components';
import { CONFIG_STORAGE_COLOR_SCHEME } from '../../constants';
import { AsyncStorageHelper } from '../../helpers/AsyncStorageHelper';
import { useTheme } from '../../hooks';
import type { ThemeType } from '../../styles/theme';

const useStyles = (theme: ThemeType) => StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
});

export function ModuleSettings(): React$Node {
  const { theme, setcolorScheme, colorScheme } = useTheme();
  const styles = useStyles(theme);

  const handleOnColorSchemeChange = (val) => {
    const value = val ? 'dark' : 'light';
    setcolorScheme(value);
    AsyncStorageHelper.setStoredData(CONFIG_STORAGE_COLOR_SCHEME, value);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <BooleanInput
          label="Dark Mode"
          value={colorScheme === 'dark'}
          onChange={handleOnColorSchemeChange}
        />
      </ScrollView>
    </View>
  );
}
