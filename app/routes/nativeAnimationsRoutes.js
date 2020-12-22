/**
 * @flow
 */
import type { RouterType } from './routes.types';
import {
  NativeAnimationsScrollNative,
  NativeAnimationsSpringNative,
  NativeAnimationsTimingNative,
} from '../modules';

export const nativeAnimationsTimingNativePath = (): string => '/animations/native-animations/timing-native';
export const NATIVE_ANIMATIONS_TIMING_NATIVE_TITLE: string = 'Timing Native';

export const nativeAnimationsScrollNativePath = (): string => '/animations/native-animations/scroll-native';
export const NATIVE_ANIMATIONS_SCROLL_NATIVE_TITLE: string = 'Scroll Native';

export const nativeAnimationsSpringNativePath = (): string => '/animations/native-animations/spring-native';
export const NATIVE_ANIMATIONS_SPRING_NATIVE_TITLE: string = 'Spring Native';

const nativeAnimationsRoutes: RouterType = [
  {
    path: nativeAnimationsTimingNativePath(),
    title: NATIVE_ANIMATIONS_TIMING_NATIVE_TITLE,
    component: NativeAnimationsTimingNative,
    father: '53',
    exact: true,
    id: '54',
  },
  {
    path: nativeAnimationsScrollNativePath(),
    title: NATIVE_ANIMATIONS_SCROLL_NATIVE_TITLE,
    component: NativeAnimationsScrollNative,
    father: '53',
    exact: true,
    id: '65',
  },
  {
    path: nativeAnimationsSpringNativePath(),
    title: NATIVE_ANIMATIONS_SPRING_NATIVE_TITLE,
    component: NativeAnimationsSpringNative,
    father: '53',
    exact: true,
    id: '66',
  },
];

export default nativeAnimationsRoutes;
