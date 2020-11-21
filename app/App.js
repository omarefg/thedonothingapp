/**
 * @flow
 */

import React from 'react';
import { SafeAreaView } from 'react-native';

import { NativeRouter, Route } from 'react-router-native';
import { HeaderProvider } from './providers';
import { withRoutes } from './hocs';
import routes from './routes/routes';

function App(): React$Node {
  return (
    <NativeRouter>
      <SafeAreaView style={{ flex: 1 }}>
        {routes.map((route) => (
          <Route
            key={route.id}
            exact={route.exact}
            path={route.path}
            render={() => {
              const EnhancedComponent = withRoutes(route.component);

              return (
                <HeaderProvider>
                  <EnhancedComponent
                    routeId={route.id}
                  />
                </HeaderProvider>
              );
            }}
          />
        ))}
      </SafeAreaView>
    </NativeRouter>
  );
}

export default App;
