/**
 * @flow
 */
import type { RouterType } from './routes.types';
import {
  InterpolationColorAndBackgroundColor,
  InterpolationExtrapolate,
  InterpolationNumbersAndInterpolateOnInterpolates,
  InterpolationRotation,
} from '../modules';

export const interpolationColorAndBackgroundColorPath = (): string => '/animations/interpolations/color-and-background-color';
export const INTERPOLATION_COLOR_AND_BACKGROUND_COLOR_TITLE: string = 'Color And BackgroundColor';

export const interpolationExtrapolatePath = (): string => '/animations/interpolations/extrapolate';
export const INTERPOLATION_EXTRAPOLATE_TITLE: string = 'Extrapolate';

export const interpolationNumbersAndInterpolateOnInterpolatesPath = (): string => '/animations/interpolations/numbers-and-interpolate-on-interpolates';
export const INTERPOLATION_NUMBERS_AND_INTERPOLATE_ON_INTERPOLATES_TITLE: string = 'Numbers And Interpolate On Interpolates';

export const interpolationRotationPath = (): string => '/animations/interpolations/rotation';
export const INTERPOLATION_ROTATION_TITLE: string = 'Rotation';

const interpolationRoutes: RouterType = [
  {
    path: interpolationColorAndBackgroundColorPath(),
    title: INTERPOLATION_COLOR_AND_BACKGROUND_COLOR_TITLE,
    component: InterpolationColorAndBackgroundColor,
    father: '48',
    exact: true,
    id: '49',
  },
  {
    path: interpolationExtrapolatePath(),
    title: INTERPOLATION_EXTRAPOLATE_TITLE,
    component: InterpolationExtrapolate,
    father: '48',
    exact: true,
    id: '50',
  },
  {
    path: interpolationNumbersAndInterpolateOnInterpolatesPath(),
    title: INTERPOLATION_NUMBERS_AND_INTERPOLATE_ON_INTERPOLATES_TITLE,
    component: InterpolationNumbersAndInterpolateOnInterpolates,
    father: '48',
    exact: true,
    id: '51',
  },
  {
    path: interpolationRotationPath(),
    title: INTERPOLATION_ROTATION_TITLE,
    component: InterpolationRotation,
    father: '48',
    exact: true,
    id: '52',
  },
];

export default interpolationRoutes;
