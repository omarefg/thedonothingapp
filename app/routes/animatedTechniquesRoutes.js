/**
 * @flow
 */
import type { RouterType } from './routes.types';
import {
  AnimatedTechniquesAnimateHidden,
  AnimatedTechniquesCliff,
  AnimatedTechniquesPointerEvents,
} from '../modules';

export const animatedTechniquesAnimateHiddenPath = (): string => '/animations/animated-techniques/animate-hidden';
export const ANIMATED_TECHNIQUES_ANIMATE_HIDDEN_TITLE: string = 'Animate Hidden';

export const animatedTechniquesCliffPath = (): string => '/animations/animated-techniques/cliff';
export const ANIMATED_TECHNIQUES_CLIFF_TITLE: string = 'Cliff';

export const animatedTechniquesPointerEventsPath = (): string => '/animations/animated-techniques/pointer-events';
export const ANIMATED_TECHNIQUES_POINTER_EVENTS_TITLE: string = 'Pointer Events';

const animatedTechniquesRoutes: RouterType = [
  {
    path: animatedTechniquesAnimateHiddenPath(),
    title: ANIMATED_TECHNIQUES_ANIMATE_HIDDEN_TITLE,
    component: AnimatedTechniquesAnimateHidden,
    father: '37',
    exact: true,
    id: '38',
  },
  {
    path: animatedTechniquesCliffPath(),
    title: ANIMATED_TECHNIQUES_CLIFF_TITLE,
    component: AnimatedTechniquesCliff,
    father: '37',
    exact: true,
    id: '39',
  },
  {
    path: animatedTechniquesPointerEventsPath(),
    title: ANIMATED_TECHNIQUES_POINTER_EVENTS_TITLE,
    component: AnimatedTechniquesPointerEvents,
    father: '37',
    exact: true,
    id: '64',
  },
];

export default animatedTechniquesRoutes;
