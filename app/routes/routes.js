/**
 * @flow
 */

import type {
  RouterType,
  ModuleAnimationsPathType,
  ModulesAnimationTitleType,
  AnimationsAnimatingPropertiesPathType,
  AnimationsAnimatingPropertiesTitleType,
  AnimatingPropertiesOpacityPathType,
  AnimatingPropertiesOpacityTitleType,
  ModulesPathType,
  ModulesTitleType,
} from './routes.types';
import {
  ModuleAnimations,
  AnimationsAnimatingProperties,
  AnimatingPropertiesOpacity,
  Modules,
} from '../modules';

// Level 0
export const modulesPath = (): ModulesPathType => '/';
export const MODULES_TITLE: ModulesTitleType = 'Modules';

// Level 1
export const moduleAnimationsPath = (): ModuleAnimationsPathType => '/animations';
export const MODULE_ANIMATIONS_TITLE: ModulesAnimationTitleType = 'Animations';

// Level 2
export const animationsAnimatingPropertiesPath = (): AnimationsAnimatingPropertiesPathType => '/animations/animating-properties';
export const ANIMATIONS_ANIMATING_PROPERTIES_TITLE: AnimationsAnimatingPropertiesTitleType = 'Animating Properties';

// Level 3
export const animatingPropertiesOpacityPath = (): AnimatingPropertiesOpacityPathType => '/animations/animating-properties/opacity';
export const ANIMATING_PROPERTIES_OPACITY_TITLE: AnimatingPropertiesOpacityTitleType = 'Opacity';

const routes: RouterType = [
  {
    path: moduleAnimationsPath(),
    title: MODULE_ANIMATIONS_TITLE,
    level: 1,
    component: ModuleAnimations,
    exact: true,
    id: '0',
  },
  {
    path: animationsAnimatingPropertiesPath(),
    title: ANIMATIONS_ANIMATING_PROPERTIES_TITLE,
    level: 2,
    component: AnimationsAnimatingProperties,
    exact: true,
    id: '1',
  },
  {
    path: animatingPropertiesOpacityPath(),
    title: ANIMATING_PROPERTIES_OPACITY_TITLE,
    level: 3,
    component: AnimatingPropertiesOpacity,
    exact: true,
    id: '2',
  },
  {
    path: modulesPath(),
    title: MODULES_TITLE,
    level: 0,
    component: Modules,
    exact: true,
    id: '3',
  },
];

export default routes;
