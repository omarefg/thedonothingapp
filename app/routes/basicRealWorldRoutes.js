/**
 * @flow
 */
import type { RouterType } from './routes.types';
import {
  BasicRealWorldAnimatedProgressBarButton,
  BasicRealWorldAnimatedQuestionnaireWithProgress,
  BasicRealWorldCorners,
  BasicRealWorldDynamicAnimatedNotifications,
  BasicRealWorldKittenCards,
  BasicRealWorldStaggeredHeads,
  BasicRealWorldStaggerFromItemsVisibilityOnMount,
} from '../modules';

export const basicRealWorldAnimatedProgressBarButtonPath = (): string => '/animations/basic-real-world/animated-progress-bar-button';
export const BASIC_REAL_WORLD_ANIMATED_PROGRESS_BAR_BUTTON_TITLE: string = 'Animated Progress Bar Button';

export const basicRealWorldAnimatedQuestionnaireWithProgressPath = (): string => '/animations/basic-real-world/animated-questionnaire-with-progress';
export const BASIC_REAL_WORLD_ANIMATED_QUESTIONNAIRE_WITH_PROGRESS_TITLE: string = 'Animated Questionnaire With Progress';

export const basicRealWorldCornersPath = (): string => '/animations/basic-real-world/corners';
export const BASIC_REAL_WORLD_CORNERS_TITLE: string = 'Corners';

export const basicRealWorldDynamicAnimatedNotificationsPath = (): string => '/animations/basic-real-world/dynamic-animated-notifications';
export const BASIC_REAL_WORLD_DYNAMIC_ANIMATED_NOTIFICATIONS_TITLE: string = 'Dynamic Animated Notifications';

export const basicRealWorldKittenCardsPath = (): string => '/animations/basic-real-world/kitten-cards';
export const BASIC_REAL_WORLD_KITTEN_CARDS_TITLE: string = 'KittenCards';

export const basicRealWorldStaggerFromItemsVisibilityOnMountPath = (): string => '/animations/basic-real-world/stagger-from-items-visibility-on-mount';
export const BASIC_REAL_WORLD_STAGGER_FROM_ITEMS_VISIBILITY_ON_MOUNT_TITLE: string = 'Stagger From Items Visibility On Mount';

export const basicRealWorldStaggeredHeadsPath = (): string => '/animations/basic-real-world/staggered-heads';
export const BASIC_REAL_WORLD_STAGGERED_HEADS_TITLE: string = 'Staggered Heads';

const basicRealWorldRoutes: RouterType = [
  {
    path: basicRealWorldAnimatedProgressBarButtonPath(),
    title: BASIC_REAL_WORLD_ANIMATED_PROGRESS_BAR_BUTTON_TITLE,
    component: BasicRealWorldAnimatedProgressBarButton,
    father: '40',
    exact: true,
    id: '41',
  },
  {
    path: basicRealWorldAnimatedQuestionnaireWithProgressPath(),
    title: BASIC_REAL_WORLD_ANIMATED_QUESTIONNAIRE_WITH_PROGRESS_TITLE,
    component: BasicRealWorldAnimatedQuestionnaireWithProgress,
    father: '40',
    exact: true,
    id: '42',
  },
  {
    path: basicRealWorldCornersPath(),
    title: BASIC_REAL_WORLD_CORNERS_TITLE,
    component: BasicRealWorldCorners,
    father: '40',
    exact: true,
    id: '43',
  },
  {
    path: basicRealWorldDynamicAnimatedNotificationsPath(),
    title: BASIC_REAL_WORLD_DYNAMIC_ANIMATED_NOTIFICATIONS_TITLE,
    component: BasicRealWorldDynamicAnimatedNotifications,
    father: '40',
    exact: true,
    id: '44',
  },
  {
    path: basicRealWorldKittenCardsPath(),
    title: BASIC_REAL_WORLD_KITTEN_CARDS_TITLE,
    component: BasicRealWorldKittenCards,
    father: '40',
    exact: true,
    id: '45',
  },
  {
    path: basicRealWorldStaggerFromItemsVisibilityOnMountPath(),
    title: BASIC_REAL_WORLD_STAGGER_FROM_ITEMS_VISIBILITY_ON_MOUNT_TITLE,
    component: BasicRealWorldStaggerFromItemsVisibilityOnMount,
    father: '40',
    exact: true,
    id: '46',
  },
  {
    path: basicRealWorldStaggeredHeadsPath(),
    title: BASIC_REAL_WORLD_STAGGERED_HEADS_TITLE,
    component: BasicRealWorldStaggeredHeads,
    father: '40',
    exact: true,
    id: '47',
  },
];

export default basicRealWorldRoutes;
