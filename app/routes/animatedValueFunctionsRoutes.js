/**
 * @flow
 */
import type { RouterType } from './routes.types';
import { AnimatedValueFunctionsEasing } from '../modules';

export const animatedValueFunctionsEasingPath = (): string => '/animations/animated-value-functions/easing';
export const ANIMATED_VALUE_FUNCTIONS_EASING_TITLE: string = 'Easing';

const animatedValueFunctionsRoutes: RouterType = [
  {
    path: animatedValueFunctionsEasingPath(),
    title: ANIMATED_VALUE_FUNCTIONS_EASING_TITLE,
    father: '11',
    component: AnimatedValueFunctionsEasing,
    exact: true,
    id: '12',
  },
];

export default animatedValueFunctionsRoutes;
