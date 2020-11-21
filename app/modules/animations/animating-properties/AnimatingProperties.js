/**
 * @flow
 */

import React from 'react';
import { SectionList } from '../../../components';
import type { RouterType } from '../../../routes/routes.types';

type AnimationsAnimatingPropertiesProps = {
  routes: RouterType
}

export function AnimationsAnimatingProperties(
  props: AnimationsAnimatingPropertiesProps,
): React$Node {
  const { routes } = props;

  return (
    <SectionList
      data={routes.filter((route) => route.level === 3)}
    />
  );
}
