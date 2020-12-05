/**
 * @flow
 */

import React from 'react';
import {
  Button, StatusBar, StyleSheet, Text, View,
} from 'react-native';
import { useHistory } from 'react-router-native';
import { useTheme } from '../hooks';
import routes, { modulesPath } from '../routes/routes';
import type { ThemeType } from '../styles/theme';

const useStyles = (theme: ThemeType) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: theme.textColor,
    borderBottomWidth: 0.3,
    paddingVertical: 10,
    backgroundColor: theme.backgroundColor,
  },
  title: {
    flex: 0.6,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.textColor,
  },
  corner: {
    flex: 0.2,
  },
});

type HeaderContainerProps = {
  children: React$Node
}

export function HeaderContainer(props: HeaderContainerProps): React$Node {
  const { children } = props;
  const { goBack, location: { pathname } } = useHistory();
  const canGoBack = pathname !== modulesPath();
  const title = routes.find((route) => route.path === pathname)?.title;
  const { theme } = useTheme();
  const styles = useStyles(theme);

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <View style={styles.corner}>
          {canGoBack && (
            <Button
              title="Back"
              onPress={goBack}
            />
          )}
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.corner} />
      </View>
      {children}
    </>
  );
}
