/**
 * @flow
 */
import type { RouterType } from './routes.types';
import {
  CombiningAnimationsDelay,
  CombiningAnimationsParallel,
  CombiningAnimationsSequence,
  CombiningAnimationsStagger,
} from '../modules';

export const combiningAnimationsDelayPath = (): string => '/animations/combining-animations/delay';
export const COMBINING_ANIMATIONS_DELAY_TITLE: string = 'Delay';

export const combiningAnimationsParallelPath = (): string => '/animations/combining-animations/parallel';
export const COMBINING_ANIMATIONS_PARALLEL_TITLE: string = 'Parallel';

export const combiningAnimationsSequencePath = (): string => '/animations/combining-animations/sequence';
export const COMBINING_ANIMATIONS_SEQUENCE_TITLE: string = 'Sequence';

export const combiningAnimationsStaggerPath = (): string => '/animations/combining-animations/stagger';
export const COMBINING_ANIMATIONS_STAGGER_TITLE: string = 'Stagger';

const combiningAnimationsRoutes: RouterType = [
  {
    path: combiningAnimationsDelayPath(),
    title: COMBINING_ANIMATIONS_DELAY_TITLE,
    component: CombiningAnimationsDelay,
    father: '63',
    exact: true,
    id: '21',
  },
  {
    path: combiningAnimationsParallelPath(),
    title: COMBINING_ANIMATIONS_PARALLEL_TITLE,
    component: CombiningAnimationsParallel,
    father: '63',
    exact: true,
    id: '22',
  },
  {
    path: combiningAnimationsSequencePath(),
    title: COMBINING_ANIMATIONS_SEQUENCE_TITLE,
    component: CombiningAnimationsSequence,
    father: '63',
    exact: true,
    id: '23',
  },
  {
    path: combiningAnimationsStaggerPath(),
    title: COMBINING_ANIMATIONS_STAGGER_TITLE,
    component: CombiningAnimationsStagger,
    father: '63',
    exact: true,
    id: '24',
  },
];

export default combiningAnimationsRoutes;
