/**
 * @flow
 */

import React from 'react';
import { SectionList } from '../../../components';
import type { RouterType } from '../../../routes/routes.types';

type AnimationsUnderstandingHowAnimatedWorksProps = {
  routes: RouterType,
  routeId: string
}

export function AnimationsUnderstandingHowAnimatedWorks(
  props: AnimationsUnderstandingHowAnimatedWorksProps,
): React$Node {
  const { routes, routeId } = props;

  return (
    <SectionList
      data={routes.filter((route) => route.father === routeId)}
    />
  );
}
