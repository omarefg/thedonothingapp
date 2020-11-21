/**
 * @flow
 */

import React from 'react';
import { SectionList } from '../../../components';
import type { RouterType } from '../../../routes/routes.types';

type AnimationsAdvancedRealWorldProps = {
  routes: RouterType,
  routeId: string
}

export function AnimationsAdvancedRealWorld(props: AnimationsAdvancedRealWorldProps): React$Node {
  const { routes, routeId } = props;

  return (
    <SectionList
      data={routes.filter((route) => route.father === routeId)}
    />
  );
}
