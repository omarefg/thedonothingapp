import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { scriptURL } = NativeModules.SourceCode;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

Reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure({ host: scriptHostname })
  .useReactNative()
  .connect();
