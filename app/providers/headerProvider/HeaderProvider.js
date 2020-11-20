/**
 * @flow
 */

import * as React from 'react';
import { Button, View } from 'react-native';
import { useHistory } from 'react-router-native';

type HeaderProviderProps = {
  children: React.Node
}

export function HeaderProvider(props: HeaderProviderProps): React.Node {
  const { children } = props;
  const { goBack, location: { pathname } } = useHistory();
  const canGoBack = pathname !== '/';

  return (
    <View>
      {canGoBack && (
        <Button
          title="Atrás"
          onPress={goBack}
        />
      )}
      {children}
    </View>
  );
}
