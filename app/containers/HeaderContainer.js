/**
 * @flow
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useHistory } from 'react-router-native';
import { useTheme } from '../hooks';
import routes from '../routes/routes';
import { modulesPath } from '../routes/rootRoutes';
import type { ThemeType } from '../styles/theme';

const useStyles = (theme: ThemeType) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
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
  const { theme, colorScheme } = useTheme();
  const styles = useStyles(theme);
  const getBarStyle = () => `${colorScheme === 'dark' ? 'light' : 'dark'}-content`;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={theme.backgroundColor}
        barStyle={getBarStyle()}
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
        <Text
          numberOfLines={1}
          style={styles.title}
        >
          {title}
        </Text>
        <View style={styles.corner} />
      </View>
      {children}
    </SafeAreaView>
  );
}
