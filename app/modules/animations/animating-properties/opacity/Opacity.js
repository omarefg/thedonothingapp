/**
 * @flow
 */

import * as React from 'react';
import { Text, View } from 'react-native';
import { HeaderProvider } from '../../../../providers';

export function AnimatingPropertiesOpacity(): React.Node {
  return (
    <HeaderProvider>
      <View>
        <Text>AnimatingPropertiesOpacity</Text>
      </View>
    </HeaderProvider>
  );
}
