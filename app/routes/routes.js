/* eslint-disable max-len */
/**
 * @flow
 */
import type { RouterType } from './routes.types';

import rootRoutes from './rootRoutes';
import modulesRoutes from './modulesRoutes';
import animationsRoutes from './animationsRoutes';
import animatingPropertiesRoutes from './animatingPropertiesRoutes';
import animatedValueFunctionsRoutes from './animatedValueFunctionsRoutes';
import animatedFunctionsRoutes from './animatedFunctionsRoutes';
import combiningAnimationsRoutes from './combiningAnimationsRoutes';
import advancedRealWorldRoutes from './advancedRealWorldRoutes';
import animatedTechniquesRoutes from './animatedTechniquesRoutes';
import basicRealWorldRoutes from './basicRealWorldRoutes';
import interpolationRoutes from './interpolationRoutes';
import nativeAnimationsRoutes from './nativeAnimationsRoutes';
import understandingHowAnimatedWorksRoutes from './understandingHowAnimatedWorksRoutes';

const routes: RouterType = [
  ...rootRoutes,
  ...modulesRoutes,
  ...animationsRoutes,
  ...animatingPropertiesRoutes,
  ...animatedValueFunctionsRoutes,
  ...animatedFunctionsRoutes,
  ...combiningAnimationsRoutes,
  ...advancedRealWorldRoutes,
  ...animatedTechniquesRoutes,
  ...basicRealWorldRoutes,
  ...interpolationRoutes,
  ...nativeAnimationsRoutes,
  ...understandingHowAnimatedWorksRoutes,
];

export default routes;
