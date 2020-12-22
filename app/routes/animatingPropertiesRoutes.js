/**
 * @flow
 */
import type { RouterType } from './routes.types';
import {
  AnimatingPropertiesAbsolutePosition,
  AnimatingPropertiesColorAndBackgroundColor,
  AnimatingPropertiesOpacity,
  AnimatingPropertiesRotation,
  AnimatingPropertiesScale,
  AnimatingPropertiesTranslatePosition,
  AnimatingPropertiesWidthHeight,
  AnimatingPropertiesWidthHeightPercentage,
} from '../modules';

export const animatingPropertiesOpacityPath = (): string => '/animations/animating-properties/opacity';
export const ANIMATING_PROPERTIES_OPACITY_TITLE: string = 'Opacity';

export const animatingPropertiesTranslatePositionPath = (): string => '/animations/animating-properties/translate-position';
export const ANIMATING_PROPERTIES_TRANSLATE_POSITION_TITLE: string = 'Translate Position';

export const animatingPropertiesScalePath = (): string => '/animations/animating-properties/scale';
export const ANIMATING_PROPERTIES_SCALE_TITLE: string = 'Scale';

export const animatingPropertiesWidthHeightPath = (): string => '/animations/animating-properties/width-height';
export const ANIMATING_PROPERTIES_WIDTH_HEIGHT_TITLE: string = 'Width Height';

export const animatingPropertiesAbsolutePositionPath = (): string => '/animations/animating-properties/absolute-position';
export const ANIMATING_PROPERTIES_ABSOLUTE_POSITION_TITLE: string = 'Absolute Position';

export const animatingPropertiesColorAndBackgroundColorPath = (): string => '/animations/animating-properties/color-and-background-color';
export const ANIMATING_PROPERTIES_COLOR_AND_BACKGROUND_COLOR_TITLE: string = 'Color and Background Color';

export const animatingPropertiesRotationPath = (): string => '/animations/animating-properties/rotation';
export const ANIMATING_PROPERTIES_ROTATION_TITLE: string = 'Rotation';

export const animatingPropertiesWidthHeightPercentagePath = (): string => '/animations/animating-properties/width-height-percentage';
export const ANIMATING_PROPERTIES_WIDTH_HEIGHT_PERCENTAGE_TITLE: string = 'Width Height Percentage';

const animatingPropertiesRoutes: RouterType = [
  {
    path: animatingPropertiesOpacityPath(),
    title: ANIMATING_PROPERTIES_OPACITY_TITLE,
    father: '1',
    component: AnimatingPropertiesOpacity,
    exact: true,
    id: '2',
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
];

export default animatingPropertiesRoutes;
