/**
 * @flow
 */

import React from 'react';
import {
  StyleSheet, Switch, Text, View,
} from 'react-native';
import { useTheme } from '../hooks';
import type { ThemeType } from '../styles/theme';

const useStyles = (theme: ThemeType) => StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color: theme.textColor,
  },
});

type BooleanInputProps = {
  label: string,
  onChange: (val: boolean) => void,
  value: boolean
}

export function BooleanInput(props: BooleanInputProps): React$Node {
  const { label, onChange, value } = props;
  const { theme } = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Switch
        onValueChange={onChange}
        value={value}
      />
    </View>
  );
}
