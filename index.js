/**
 * @flow
 */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

const { NODE_ENV: env } = process.env;

if (env !== 'production') {
  // eslint-disable-next-line no-console
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => App);
