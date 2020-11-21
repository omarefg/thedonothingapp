/**
 * @flow
 */

import React from 'react';
import { SectionList } from '../../components';
import type { RouterType } from '../../routes/routes.types';

type ModuleAnimationsProps = {
  routes: RouterType
}

export function ModuleAnimations(props: ModuleAnimationsProps): React$Node {
  const { routes } = props;

  return (
    <SectionList
      data={routes.filter((route) => route.level === 2)}
    />
  );
}
