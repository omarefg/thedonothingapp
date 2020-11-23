/**
 * @flow
 */

import React from 'react';
import {
  Button, StatusBar, StyleSheet, Text, View,
} from 'react-native';
import { useHistory } from 'react-router-native';
import routes, { modulesPath } from '../routes/routes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#333',
    borderBottomWidth: 0.3,
    paddingVertical: 10,
  },
  title: {
    flex: 0.6,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  corner: {
    flex: 0.2,
  },
  button: {
    backgroundColor: 'red',
  },
});

type HeaderProviderProps = {
  children: React$Node
}

export function HeaderProvider(props: HeaderProviderProps): React$Node {
  const { children } = props;
  const { goBack, location: { pathname } } = useHistory();
  const canGoBack = pathname !== modulesPath();
  const title = routes.find((route) => route.path === pathname)?.title;

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
              style={styles.button}
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
