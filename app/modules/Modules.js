/**
 * @flow
 */

import React from 'react';
import { SectionList } from '../components';
import type { RouterType } from '../routes/routes.types';

type ModulesProps = {
  routes: RouterType,
  routeId: string
}

export function Modules(props: ModulesProps): React$Node {
  const { routes, routeId } = props;

  return (
    <SectionList
      data={routes.filter((route) => route.father === routeId)}
    />
  );
}
