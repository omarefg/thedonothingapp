/**
 * @flow
 */
import type { RouterType } from './routes.types';
import {
  AnimatedFunctionsAdd,
  AnimatedFunctionsDecay,
  AnimatedFunctionsDivide,
  AnimatedFunctionsEvent,
  AnimatedFunctionsModulo,
  AnimatedFunctionsMultiply,
  AnimatedFunctionsSpring,
} from '../modules';

export const animatedFunctionsAddPath = (): string => '/animations/animated-functions/add';
export const ANIMATED_FUNCTIONS_ADD_TITLE: string = 'Add';

export const animatedFunctionsDecayPath = (): string => '/animations/animated-functions/decay';
export const ANIMATED_FUNCTIONS_DECAY_TITLE: string = 'Decay';

export const animatedFunctionsDividePath = (): string => '/animations/animated-functions/divide';
export const ANIMATED_FUNCTIONS_DIVIDE_TITLE: string = 'Divide';

export const animatedFunctionsEventPath = (): string => '/animations/animated-functions/event';
export const ANIMATED_FUNCTIONS_EVENT_TITLE: string = 'Event';

export const animatedFunctionsModuloPath = (): string => '/animations/animated-functions/modulo';
export const ANIMATED_FUNCTIONS_MODULO_TITLE: string = 'Modulo';

export const animatedFunctionsMultiplyPath = (): string => '/animations/animated-functions/multiply';
export const ANIMATED_FUNCTIONS_MULTIPLY_TITLE: string = 'Multiply';

export const animatedFunctionsSpringPath = (): string => '/animations/animated-functions/spring';
export const ANIMATED_FUNCTIONS_SPRING_TITLE: string = 'Spring';

const animatedFunctionsRoutes: RouterType = [
  {
    path: animatedFunctionsAddPath(),
    title: ANIMATED_FUNCTIONS_ADD_TITLE,
    father: '13',
    component: AnimatedFunctionsAdd,
    exact: true,
    id: '14',
  },
  {
    path: animatedFunctionsDecayPath(),
    title: ANIMATED_FUNCTIONS_DECAY_TITLE,
    father: '13',
    component: AnimatedFunctionsDecay,
    exact: true,
    id: '15',
  },
  {
    path: animatedFunctionsDividePath(),
    title: ANIMATED_FUNCTIONS_DIVIDE_TITLE,
    father: '13',
    component: AnimatedFunctionsDivide,
    exact: true,
    id: '16',
  },
  {
    path: animatedFunctionsEventPath(),
    title: ANIMATED_FUNCTIONS_EVENT_TITLE,
    father: '13',
    component: AnimatedFunctionsEvent,
    exact: true,
    id: '17',
  },
  {
    path: animatedFunctionsModuloPath(),
    title: ANIMATED_FUNCTIONS_MODULO_TITLE,
    father: '13',
    component: AnimatedFunctionsModulo,
    exact: true,
    id: '18',
  },
  {
    path: animatedFunctionsMultiplyPath(),
    title: ANIMATED_FUNCTIONS_MULTIPLY_TITLE,
    father: '13',
    component: AnimatedFunctionsMultiply,
    exact: true,
    id: '19',
  },
  {
    path: animatedFunctionsSpringPath(),
    title: ANIMATED_FUNCTIONS_SPRING_TITLE,
    father: '13',
    component: AnimatedFunctionsSpring,
    exact: true,
    id: '20',
  },
];

export default animatedFunctionsRoutes;
