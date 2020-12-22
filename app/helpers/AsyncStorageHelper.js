/**
 * @flow
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CONFIG_STORAGE_NAME } from '../constants';

export class AsyncStorageHelper {
  static async getStoredData(key: string): Promise<any> {
    return AsyncStorage.getItem(`${CONFIG_STORAGE_NAME}:${key}`)
      .then((value) => {
        if (value) {
          return JSON.parse(value);
        }
        return undefined;
      })
      .catch((error) => {
        throw error;
      });
  }

  static async setStoredData(key: string, value: any = {}): Promise<void> {
    return AsyncStorage.setItem(`${CONFIG_STORAGE_NAME}:${key}`, JSON.stringify(value))
      .catch((error) => {
        throw error;
      });
  }
}
