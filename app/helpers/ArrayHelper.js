/**
 * @flow
 */

export class ArrayHelper {
  static increasingSortWithKey(array: any[], key: string): any[] {
    return array.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
  }
}
