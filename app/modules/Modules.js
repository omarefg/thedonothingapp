/**
 * @flow
 */

import React from 'react';
import { SectionList } from '../components';
import type { RouterType } from '../routes/routes.types';

type ModulesProps = {
  routes: RouterType
}

export function Modules(props: ModulesProps): React$Node {
  const { routes } = props;

  return (
    <SectionList
      data={routes.filter((route) => route.level === 1)}
    />
  );
}
