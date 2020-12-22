/**
 * @flow
 */
import type { RouterType } from './routes.types';
import {
  AnimationsAdvancedRealWorld,
  AnimationsAnimatedFunctions,
  AnimationsAnimatedTechniques,
  AnimationsAnimatedValueFunctions,
  AnimationsAnimatingProperties,
  AnimationsBasicRealWorld,
  AnimationsCombiningAnimations,
  AnimationsInterpolation,
  AnimationsNativeAnimations,
  AnimationsUnderstandingHowAnimatedWorks,
} from '../modules';

export const animationsAnimatingPropertiesPath = (): string => '/animations/animating-properties';
export const ANIMATIONS_ANIMATING_PROPERTIES_TITLE: string = 'Animating Properties';

export const animationsAnimatedValueFunctionsPath = (): string => '/animations/animated-value-functions';
export const ANIMATIONS_ANIMATED_VALUE_FUNCTIONS_TITLE: string = 'Animated Value Functions';

export const animationsAnimatedFunctionsPath = (): string => '/animations/animated-functions';
export const ANIMATIONS_ANIMATED_FUNCTIONS_TITLE: string = 'Animated Functions';

export const animationsCombiningAnimationsPath = (): string => '/animations/combining-animations';
export const ANIMATIONS_COMBINING_ANIMATIONS_TITLE: string = 'Combining Animations';

export const animationsAdvancedRealWorldPath = (): string => '/animations/advanced-real-world';
export const ANIMATIONS_ADVANCED_REAL_WORLD_TITLE: string = 'Advanced Real World';

export const animationsBasicRealWorldPath = (): string => '/animations/basic-real-world';
export const ANIMATIONS_BASIC_REAL_WORLD_TITLE: string = 'Basic Real World';

export const animationsInterpolationPath = (): string => '/animations/interpolations';
export const ANIMATIONS_INTERPOLATION_TITLE: string = 'Interpolations';

export const animationsNativeAnimationsPath = (): string => '/animations/native-animations';
export const ANIMATIONS_NATIVE_ANIMATIONS_TITLE: string = 'Native Animations';

export const animationsUnderstandingHowAnimatedWorksPath = (): string => '/animations/understanding-how-animated-works';
export const ANIMATIONS_UNDERSTANDING_HOW_ANIMATED_WORKS_TITLE: string = 'Understanding How Animated Works';

export const animationsAnimatedTechniquesPath = (): string => '/animations/animated-techniques';
export const ANIMATIONS_ANIMATED_TECHNIQUES_TITLE: string = 'Animated Techniques';

const animationsRoutes: RouterType = [
  {
    path: animationsAnimatingPropertiesPath(),
    title: ANIMATIONS_ANIMATING_PROPERTIES_TITLE,
    father: '0',
    component: AnimationsAnimatingProperties,
    exact: true,
    id: '1',
  },
  {
    path: animationsAnimatedValueFunctionsPath(),
    title: ANIMATIONS_ANIMATED_VALUE_FUNCTIONS_TITLE,
    father: '0',
    component: AnimationsAnimatedValueFunctions,
    exact: true,
    id: '11',
  },
  {
    path: animationsCombiningAnimationsPath(),
    title: ANIMATIONS_COMBINING_ANIMATIONS_TITLE,
    component: AnimationsCombiningAnimations,
    father: '0',
    exact: true,
    id: '63',
  },
  {
    path: animationsAnimatedFunctionsPath(),
    title: ANIMATIONS_ANIMATED_FUNCTIONS_TITLE,
    father: '0',
    component: AnimationsAnimatedFunctions,
    exact: true,
    id: '13',
  },
  {
    path: animationsAdvancedRealWorldPath(),
    title: ANIMATIONS_ADVANCED_REAL_WORLD_TITLE,
    component: AnimationsAdvancedRealWorld,
    father: '0',
    exact: true,
    id: '25',
  },
  {
    path: animationsAnimatedTechniquesPath(),
    title: ANIMATIONS_ANIMATED_TECHNIQUES_TITLE,
    component: AnimationsAnimatedTechniques,
    father: '0',
    exact: true,
    id: '37',
  },
  {
    path: animationsBasicRealWorldPath(),
    title: ANIMATIONS_BASIC_REAL_WORLD_TITLE,
    component: AnimationsBasicRealWorld,
    father: '0',
    exact: true,
    id: '40',
  },
  {
    path: animationsInterpolationPath(),
    title: ANIMATIONS_INTERPOLATION_TITLE,
    component: AnimationsInterpolation,
    father: '0',
    exact: true,
    id: '48',
  },
  {
    path: animationsNativeAnimationsPath(),
    title: ANIMATIONS_NATIVE_ANIMATIONS_TITLE,
    component: AnimationsNativeAnimations,
    father: '0',
    exact: true,
    id: '53',
  },
  {
    path: animationsUnderstandingHowAnimatedWorksPath(),
    title: ANIMATIONS_UNDERSTANDING_HOW_ANIMATED_WORKS_TITLE,
    component: AnimationsUnderstandingHowAnimatedWorks,
    father: '0',
    exact: true,
    id: '55',
  },
];

export default animationsRoutes;
