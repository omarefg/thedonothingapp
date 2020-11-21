/* eslint-disable react/jsx-props-no-spreading */
/**
 * @flow
 */

import React from 'react';
import routes from '../routes/routes';

export function withRoutes(Component: () => React$Node): () => React$Node {
  return (props: any): React$Node => (
    <Component
      {...props}
      routes={routes}
    />
  );
}
