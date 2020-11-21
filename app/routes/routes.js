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
  {
    path: animatingPropertiesTranslatePositionPath(),
    title: ANIMATING_PROPERTIES_TRANSLATE_POSITION_TITLE,
    level: 3,
    component: AnimatingPropertiesTranslatePosition,
    exact: true,
    id: '4',
  },
  {
    path: animatingPropertiesScalePath(),
    title: ANIMATING_PROPERTIES_SCALE_TITLE,
    level: 3,
    component: AnimatingPropertiesScale,
    exact: true,
    id: '5',
  },
  {
    path: animatingPropertiesAbsolutePositionPath(),
    title: ANIMATING_PROPERTIES_ABSOLUTE_POSITION_TITLE,
    level: 3,
    component: AnimatingPropertiesAbsolutePosition,
    exact: true,
    id: '6',
  },
  {
    path: animatingPropertiesColorAndBackgroundColorPath(),
    title: ANIMATING_PROPERTIES_COLOR_AND_BACKGROUND_COLOR_TITLE,
    level: 3,
    component: AnimatingPropertiesColorAndBackgroundColor,
    exact: true,
    id: '7',
  },
  {
    path: animatingPropertiesRotationPath(),
    title: ANIMATING_PROPERTIES_ROTATION_TITLE,
    level: 3,
    component: AnimatingPropertiesRotation,
    exact: true,
    id: '8',
  },
  {
    path: animatingPropertiesWidthHeightPercentagePath(),
    title: ANIMATING_PROPERTIES_WIDTH_HEIGHT_PERCENTAGE_TITLE,
    level: 3,
    component: AnimatingPropertiesWidthHeightPercentage,
    exact: true,
    id: '9',
  },
  {
    path: animatingPropertiesWidthHeightPath(),
    title: ANIMATING_PROPERTIES_WIDTH_HEIGHT_TITLE,
    level: 3,
    component: AnimatingPropertiesWidthHeight,
    exact: true,
    id: '10',
  },
];

export default routes;
