/**
 * @flow
 */

import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet } from 'react-native';

import { NativeRouter, Route } from 'react-router-native';
import { ThemeProvider } from './providers';
import { HeaderContainer } from './containers';
import { withRoutes } from './hocs';
import routes from './routes/routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App(): React$Node {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {routes.map((route) => (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              render={() => {
                const ComponentWithRoutes = withRoutes(route.component);

                return (
                  <ThemeProvider>
                    <HeaderContainer>
                      <ComponentWithRoutes
                        routeId={route.id}
                      />
                    </HeaderContainer>
                  </ThemeProvider>
                );
              }}
            />
          ))}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </NativeRouter>
  );
}

export default App;
