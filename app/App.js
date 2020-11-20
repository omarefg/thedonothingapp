/**
 * @flow
 */

import React from 'react';
import { SafeAreaView } from 'react-native';

import { NativeRouter, Route } from 'react-router-native';
import routes from './routes/routes';

const App: () => React$Node = () => (
  <NativeRouter>
    <SafeAreaView>
      {routes.map((route) => (
        <Route
          key={route.id}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </SafeAreaView>
  </NativeRouter>
);

export default App;
