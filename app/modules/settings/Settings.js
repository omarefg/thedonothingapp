/**
 * @flow
 */

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BooleanInput } from '../../components';
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

  return (
    <View style={styles.container}>
      <ScrollView>
        <BooleanInput
          label="Dark Mode"
          value={colorScheme === 'dark'}
          onChange={(val) => setcolorScheme(val ? 'dark' : 'light')}
        />
      </ScrollView>
    </View>
  );
}
