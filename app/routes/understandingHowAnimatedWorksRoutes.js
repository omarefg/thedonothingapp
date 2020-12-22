/* eslint-disable max-len */
/**
 * @flow
 */
import type { RouterType } from './routes.types';
import {
  UnderstandingHowAnimatedWorksCreateAnimatedComponent,
  UnderstandingHowAnimatedWorksUsingAndUnderstandingSetNativeProps,
  UnderstandingHowAnimatedWorksUsingArtMorphTweenAndAnimatedToAnimateComplexSVGPaths,
  UnderstandingHowAnimatedWorksUsingD3InterpolatePathAndAnimatedToAnimateSimpleSVGPaths,
  UnderstandingHowAnimatedWorksUsingD3InterpolateWithAnimated,
  UnderstandingHowAnimatedWorksUsingFlubberAndAnimatedForBetterSVGPathMorphing,
} from '../modules';

export const understandingHowAnimatedWorksCreateAnimatedComponentPath = (): string => '/animations/understanding-how-animated-works/create-animated-component';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_CREATE_ANIMATED_COMPONENT_TITLE: string = 'Create Animated Component';

export const understandingHowAnimatedWorksUsingAndUnderstandingSetNativePropsPath = (): string => '/animations/understanding-how-animated-works/using-and-understanding-set-native-props';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_USING_AND_UNDERSTANDING_SET_NATIVE_PROPS_TITLE: string = 'Using And Understanding Set Native Props';

export const understandingHowAnimatedWorksUsingArtMorphTweenAndAnimatedToAnimateComplexSvgPathsPath = (): string => '/animations/understanding-how-animated-works/using-art-morph-tween-to-animate-complex-svg-paths';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_USING_ART_MORPH_TWEEN_AND_ANIMATED_TO_ANIMATE_COMPLEX_SVG_PATHS_TITLE: string = 'Using Art Morph Tween And Animated To Animate Complex SVG Paths';

export const understandingHowAnimatedWorksUsingD3InterpolatePathAndAnimatedToAnimateSimpleSvgPathsPath = (): string => '/animations/understanding-how-animated-works/using-d3-interpolate-path-to-animate-simple-svg-paths';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_USING_D3_INTERPOLATE_PATH_AND_ANIMATED_TO_ANIMATE_SIMPLE_SVG_PATHS_TITLE: string = 'Using D3 Interpolate Path And Animated To Animate Simple SVG Paths';

export const understandingHowAnimatedWorksUsingD3InterpolateWithAnimatedPath = (): string => '/animations/understanding-how-animated-works/using-d3-interpolate-with-animated';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_USING_D3_INTERPOLATE_WITH_ANIMATED_TITLE: string = 'Using D3 Interpolate With Animated';

export const understandingHowAnimatedWorksUsingFlubberAndAnimatedForBetterSvgPathMorphingPath = (): string => '/animations/understanding-how-animated-works/using-flubber-and-animated-for-better-svg-path-morphing';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_USING_FLUBBER_AND_ANIMATED_FOR_BETTER_SVG_PATH_MORPHING_TITLE: string = 'Using Flubber And Animated For Better SVG Path Morphing';

const understandingHowAnimatedWorksRoutes: RouterType = [
  {
    path: understandingHowAnimatedWorksCreateAnimatedComponentPath(),
    title: UNDERSTANDING_HOW_ANIMATED_WORKS_CREATE_ANIMATED_COMPONENT_TITLE,
    component: UnderstandingHowAnimatedWorksCreateAnimatedComponent,
    father: '55',
    exact: true,
    id: '57',
  },
  {
    path: understandingHowAnimatedWorksUsingAndUnderstandingSetNativePropsPath(),
    title: UNDERSTANDING_HOW_ANIMATED_WORKS_USING_AND_UNDERSTANDING_SET_NATIVE_PROPS_TITLE,
    component: UnderstandingHowAnimatedWorksUsingAndUnderstandingSetNativeProps,
    father: '55',
    exact: true,
    id: '58',
  },
  {
    path: understandingHowAnimatedWorksUsingArtMorphTweenAndAnimatedToAnimateComplexSvgPathsPath(),
    title: UNDERSTANDING_HOW_ANIMATED_WORKS_USING_ART_MORPH_TWEEN_AND_ANIMATED_TO_ANIMATE_COMPLEX_SVG_PATHS_TITLE,
    component: UnderstandingHowAnimatedWorksUsingArtMorphTweenAndAnimatedToAnimateComplexSVGPaths,
    father: '55',
    exact: true,
    id: '59',
  },
  {
    path: understandingHowAnimatedWorksUsingD3InterpolatePathAndAnimatedToAnimateSimpleSvgPathsPath(),
    title: UNDERSTANDING_HOW_ANIMATED_WORKS_USING_D3_INTERPOLATE_PATH_AND_ANIMATED_TO_ANIMATE_SIMPLE_SVG_PATHS_TITLE,
    component: UnderstandingHowAnimatedWorksUsingD3InterpolatePathAndAnimatedToAnimateSimpleSVGPaths,
    father: '55',
    exact: true,
    id: '60',
  },
  {
    path: understandingHowAnimatedWorksUsingD3InterpolateWithAnimatedPath(),
    title: UNDERSTANDING_HOW_ANIMATED_WORKS_USING_D3_INTERPOLATE_WITH_ANIMATED_TITLE,
    component: UnderstandingHowAnimatedWorksUsingD3InterpolateWithAnimated,
    father: '55',
    exact: true,
    id: '61',
  },
  {
    path: understandingHowAnimatedWorksUsingFlubberAndAnimatedForBetterSvgPathMorphingPath(),
    title: UNDERSTANDING_HOW_ANIMATED_WORKS_USING_FLUBBER_AND_ANIMATED_FOR_BETTER_SVG_PATH_MORPHING_TITLE,
    component: UnderstandingHowAnimatedWorksUsingFlubberAndAnimatedForBetterSVGPathMorphing,
    father: '55',
    exact: true,
    id: '62',
  },
];

export default understandingHowAnimatedWorksRoutes;
