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
  AnimatingPropertiesTranslatePositionPathType,
  AnimatingPropertiesTranslatePositionTitleType,
  AnimatingPropertiesScalePathType,
  AnimatingPropertiesScaleTitleType,
  AnimatingPropertiesWidthHeightPathType,
  AnimatingPropertiesWidthHeightTitleType,
  AnimatingPropertiesAbsolutePositiontPathType,
  AnimatingPropertiesAbsolutePositiontTitleType,
  AnimatingPropertiesColorAndBackgroundColorPathType,
  AnimatingPropertiesColorAndBackgroundColorTitleType,
  AnimatingPropertiesRotationPathType,
  AnimatingPropertiesRotationTitleType,
  AnimatingPropertiesWidthHeightPercentagePathType,
  AnimatingPropertiesWidthHeightPercentageTitleType,
  AnimationsAnimatedValueFunctionsPathType,
  AnimationsAnimatedValueFunctionsTitleType,
} from './routes.types';
import {
  ModuleAnimations,
  AnimationsAnimatingProperties,
  AnimatingPropertiesOpacity,
  Modules,
  AnimatingPropertiesTranslatePosition,
  AnimatingPropertiesScale,
  AnimatingPropertiesAbsolutePosition,
  AnimatingPropertiesColorAndBackgroundColor,
  AnimatingPropertiesRotation,
  AnimatingPropertiesWidthHeightPercentage,
  AnimatingPropertiesWidthHeight,
  AnimationsAnimatedValueFunctions,
} from '../modules';

export const modulesPath = (): ModulesPathType => '/';
export const MODULES_TITLE: ModulesTitleType = 'Modules';

export const moduleAnimationsPath = (): ModuleAnimationsPathType => '/animations';
export const MODULE_ANIMATIONS_TITLE: ModulesAnimationTitleType = 'Animations';

export const animationsAnimatingPropertiesPath = (): AnimationsAnimatingPropertiesPathType => '/animations/animating-properties';
export const ANIMATIONS_ANIMATING_PROPERTIES_TITLE: AnimationsAnimatingPropertiesTitleType = 'Animating Properties';

export const animationsAnimatedValueFunctionsPath = (): AnimationsAnimatedValueFunctionsPathType => '/animations/animated-value-functions';
export const ANIMATIONS_ANIMATED_VALUE_FUNCTIONS_TITLE: AnimationsAnimatedValueFunctionsTitleType = 'Animated Value Functions';

export const animatingPropertiesOpacityPath = (): AnimatingPropertiesOpacityPathType => '/animations/animating-properties/opacity';
export const ANIMATING_PROPERTIES_OPACITY_TITLE: AnimatingPropertiesOpacityTitleType = 'Opacity';

export const animatingPropertiesTranslatePositionPath = (): AnimatingPropertiesTranslatePositionPathType => '/animations/animating-properties/translate-position';
export const ANIMATING_PROPERTIES_TRANSLATE_POSITION_TITLE: AnimatingPropertiesTranslatePositionTitleType = 'Translate Position';

export const animatingPropertiesScalePath = (): AnimatingPropertiesScalePathType => '/animations/animating-properties/scale';
export const ANIMATING_PROPERTIES_SCALE_TITLE: AnimatingPropertiesScaleTitleType = 'Scale';

export const animatingPropertiesWidthHeightPath = (): AnimatingPropertiesWidthHeightPathType => '/animations/animating-properties/width-height';
export const ANIMATING_PROPERTIES_WIDTH_HEIGHT_TITLE: AnimatingPropertiesWidthHeightTitleType = 'Width Height';

export const animatingPropertiesAbsolutePositionPath = (): AnimatingPropertiesAbsolutePositiontPathType => '/animations/animating-properties/absolute-position';
export const ANIMATING_PROPERTIES_ABSOLUTE_POSITION_TITLE: AnimatingPropertiesAbsolutePositiontTitleType = 'Absolute Position';

export const animatingPropertiesColorAndBackgroundColorPath = (): AnimatingPropertiesColorAndBackgroundColorPathType => '/animations/animating-properties/color-and-background-color';
export const ANIMATING_PROPERTIES_COLOR_AND_BACKGROUND_COLOR_TITLE: AnimatingPropertiesColorAndBackgroundColorTitleType = 'Color and Background Color';

export const animatingPropertiesRotationPath = (): AnimatingPropertiesRotationPathType => '/animations/animating-properties/rotation';
export const ANIMATING_PROPERTIES_ROTATION_TITLE: AnimatingPropertiesRotationTitleType = 'Rotation';

export const animatingPropertiesWidthHeightPercentagePath = (): AnimatingPropertiesWidthHeightPercentagePathType => '/animations/animating-properties/width-height-percentage';
export const ANIMATING_PROPERTIES_WIDTH_HEIGHT_PERCENTAGE_TITLE: AnimatingPropertiesWidthHeightPercentageTitleType = 'Width Height Percentage';

const routes: RouterType = [
  {
    path: moduleAnimationsPath(),
    title: MODULE_ANIMATIONS_TITLE,
    father: '3',
    component: ModuleAnimations,
    exact: true,
    id: '0',
  },
  {
    path: animationsAnimatingPropertiesPath(),
    title: ANIMATIONS_ANIMATING_PROPERTIES_TITLE,
    father: '0',
    component: AnimationsAnimatingProperties,
    exact: true,
    id: '1',
  },
  {
    path: animatingPropertiesOpacityPath(),
    title: ANIMATING_PROPERTIES_OPACITY_TITLE,
    father: '1',
    component: AnimatingPropertiesOpacity,
    exact: true,
    id: '2',
  },
  {
    path: modulesPath(),
    title: MODULES_TITLE,
    father: null,
    component: Modules,
    exact: true,
    id: '3',
  },
  {
    path: animatingPropertiesTranslatePositionPath(),
    title: ANIMATING_PROPERTIES_TRANSLATE_POSITION_TITLE,
    father: '1',
    component: AnimatingPropertiesTranslatePosition,
    exact: true,
    id: '4',
  },
  {
    path: animatingPropertiesScalePath(),
    title: ANIMATING_PROPERTIES_SCALE_TITLE,
    father: '1',
    component: AnimatingPropertiesScale,
    exact: true,
    id: '5',
  },
  {
    path: animatingPropertiesAbsolutePositionPath(),
    title: ANIMATING_PROPERTIES_ABSOLUTE_POSITION_TITLE,
    father: '1',
    component: AnimatingPropertiesAbsolutePosition,
    exact: true,
    id: '6',
  },
  {
    path: animatingPropertiesColorAndBackgroundColorPath(),
    title: ANIMATING_PROPERTIES_COLOR_AND_BACKGROUND_COLOR_TITLE,
    father: '1',
    component: AnimatingPropertiesColorAndBackgroundColor,
    exact: true,
    id: '7',
  },
  {
    path: animatingPropertiesRotationPath(),
    title: ANIMATING_PROPERTIES_ROTATION_TITLE,
    father: '1',
    component: AnimatingPropertiesRotation,
    exact: true,
    id: '8',
  },
  {
    path: animatingPropertiesWidthHeightPercentagePath(),
    title: ANIMATING_PROPERTIES_WIDTH_HEIGHT_PERCENTAGE_TITLE,
    father: '1',
    component: AnimatingPropertiesWidthHeightPercentage,
    exact: true,
    id: '9',
  },
  {
    path: animatingPropertiesWidthHeightPath(),
    title: ANIMATING_PROPERTIES_WIDTH_HEIGHT_TITLE,
    father: '1',
    component: AnimatingPropertiesWidthHeight,
    exact: true,
    id: '10',
  },
  {
    path: animationsAnimatedValueFunctionsPath(),
    title: ANIMATIONS_ANIMATED_VALUE_FUNCTIONS_TITLE,
    father: '0',
    component: AnimationsAnimatedValueFunctions,
    exact: true,
    id: '11',
  },
];

export default routes;
