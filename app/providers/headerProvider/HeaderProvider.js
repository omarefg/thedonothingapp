/**
 * @flow
 */

import React from 'react';
import { Button, Text, View } from 'react-native';
import { useHistory } from 'react-router-native';
import routes, { modulesPath } from '../../routes/routes';

type HeaderProviderProps = {
  children: React$Node
}

export function HeaderProvider(props: HeaderProviderProps): React$Node {
  const { children } = props;
  const { goBack, location: { pathname } } = useHistory();
  const canGoBack = pathname !== modulesPath();
  const title = routes.find((route) => route.path === pathname)?.title;

  return (
    <>
      <View>
        {canGoBack && (
        <Button
          title="Atrás"
          onPress={goBack}
        />
        )}
        <Text>{title}</Text>
      </View>
      {children}
    </>
  );
}
