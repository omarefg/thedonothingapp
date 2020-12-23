/**
 * @flow
 */

import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

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
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ThemeProvider>
          {routes.map((route) => (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              render={() => {
                const ComponentWithRoutes = withRoutes(route.component);
                return (
                  <HeaderContainer>
                    <ComponentWithRoutes
                      routeId={route.id}
                    />
                  </HeaderContainer>
                );
              }}
            />
          ))}
        </ThemeProvider>
      </KeyboardAvoidingView>
    </NativeRouter>
  );
}

export default App;
