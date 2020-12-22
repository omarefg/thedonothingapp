/**
 * @flow
 */
import type { RouterType } from './routes.types';
import {
  AdvancedRealWorldAnimatedColorPicker,
  AdvancedRealWorldApplicationIntroScreen,
  AdvancedRealWorldBouncingHeartShapedLikeButtonOnPress,
  AdvancedRealWorldCreateAHorizontalParallaxScrollView,
  AdvancedRealWorldCreateASocialCommentModalWithAnimatedSwipeAway,
  AdvancedRealWorldEvolvingWriteButton,
  AdvancedRealWorldExpandingNotifyInputWithSuccessMessage,
  AdvancedRealWorldExplodingHeartButton,
  AdvancedRealWorldFloatingActionButtonWithMenu,
  AdvancedRealWorldPhotoGridSharedElement,
  AdvancedRealWorldTapToShowLoveFloatingHearts,
} from '../modules';

export const advancedRealWorldAnimatedColorPickerPath = (): string => '/animations/advanced-real-world/animated-color-picker';
export const ADVANCED_REAL_WORLD_ANIMATED_COLOR_PICKER_TITLE: string = 'Animated Color Picker';

export const advancedRealWorldApplicationIntroScreenPath = (): string => '/animations/advanced-real-world/application-intro-screen';
export const ADVANCED_REAL_WORLD_APPLICATION_INTRO_SCREEN_TITLE: string = 'Application Intro Screen';

export const advancedRealWorldBouncingHeartShapedLikeButtonOnPressPath = (): string => '/animations/advanced-real-world/bouncing-heart-shaped-like-button-on-press';
export const ADVANCED_REAL_WORLD_BOUNCING_HEART_SHAPED_LIKE_BUTTON_ON_PRESS_TITLE: string = 'Bouncing Heart Shaped Like Button On Press';

export const advancedRealWorldCreateAHorizontalParallaxScrollViewPath = (): string => '/animations/advanced-real-world/create-a-horizontal-parallax-scroll-view';
export const ADVANCED_REAL_WORLD_CREATE_A_HORIZONTAL_PARALLAX_SCROLL_VIEW_TITLE: string = 'Create A Horizontal Parallax Scroll View';

export const advancedRealWorldCreateASocialCommentModalWithAnimatedSwipeAwayPath = (): string => '/animations/advanced-real-world/create-a-social-comment-modal-with-animated-swipe-away';
export const ADVANCED_REAL_WORLD_CREATE_A_SOCIAL_COMMENT_MODAL_WITH_ANIMATED_SWIPE_AWAY_TITLE: string = 'CreateASocialCommentModalWithAnimatedSwipeAway';

export const advancedRealWorldEvolvingWriteButtonPath = (): string => '/animations/advanced-real-world/evolving-write-button';
export const ADVANCED_REAL_WORLD_EVOLVING_WRITE_BUTTON_TITLE: string = 'Evolving Write Button';

export const advancedRealWorldExpandingNotifyInputWithSuccessMessagePath = (): string => '/animations/advanced-real-world/expanding-notify-input-with-success-message';
export const ADVANCED_REAL_WORLD_EXPANDING_NOTIFY_INPUT_WITH_SUCCESS_MESSAGE_TITLE: string = 'ExpandingNotifyInputWithSuccessMessage';

export const advancedRealWorldExplodingHeartButtonPath = (): string => '/animations/advanced-real-world/exploding-heart-button';
export const ADVANCED_REAL_WORLD_EXPLODING_HEART_BUTTON_TITLE: string = 'ExplodingHeartButton';

export const advancedRealWorldFloatingActionButtonWithMenuPath = (): string => '/animations/advanced-real-world/floating-action-button-with-menu';
export const ADVANCED_REAL_WORLD_FLOATING_ACTION_BUTTON_WITH_MENU_TITLE: string = 'Floating Action Button With Menu';

export const advancedRealWorldPhotoGridSharedElementPath = (): string => '/animations/advanced-real-world/photo-grid-shared-element';
export const ADVANCED_REAL_WORLD_PHOTO_GRID_SHARED_ELEMENT_TITLE: string = 'PhotoGridSharedElement';

export const advancedRealWorldTapToShowLoveFloatingHeartsPath = (): string => '/animations/advanced-real-world/tap-to-show-love-floating-hearts';
export const ADVANCED_REAL_WORLD_TAP_TO_SHOW_LOVE_FLOATING_HEARTS_TITLE: string = 'Tap To Show Love Floating Hearts';

const advancedRealWorldRoutes: RouterType = [
  {
    path: advancedRealWorldAnimatedColorPickerPath(),
    title: ADVANCED_REAL_WORLD_ANIMATED_COLOR_PICKER_TITLE,
    component: AdvancedRealWorldAnimatedColorPicker,
    father: '25',
    exact: true,
    id: '26',
  },
  {
    path: advancedRealWorldApplicationIntroScreenPath(),
    title: ADVANCED_REAL_WORLD_APPLICATION_INTRO_SCREEN_TITLE,
    component: AdvancedRealWorldApplicationIntroScreen,
    father: '25',
    exact: true,
    id: '27',
  },
  {
    path: advancedRealWorldBouncingHeartShapedLikeButtonOnPressPath(),
    title: ADVANCED_REAL_WORLD_BOUNCING_HEART_SHAPED_LIKE_BUTTON_ON_PRESS_TITLE,
    component: AdvancedRealWorldBouncingHeartShapedLikeButtonOnPress,
    father: '25',
    exact: true,
    id: '28',
  },
  {
    path: advancedRealWorldCreateAHorizontalParallaxScrollViewPath(),
    title: ADVANCED_REAL_WORLD_CREATE_A_HORIZONTAL_PARALLAX_SCROLL_VIEW_TITLE,
    component: AdvancedRealWorldCreateAHorizontalParallaxScrollView,
    father: '25',
    exact: true,
    id: '29',
  },
  {
    path: advancedRealWorldCreateASocialCommentModalWithAnimatedSwipeAwayPath(),
    title: ADVANCED_REAL_WORLD_CREATE_A_SOCIAL_COMMENT_MODAL_WITH_ANIMATED_SWIPE_AWAY_TITLE,
    component: AdvancedRealWorldCreateASocialCommentModalWithAnimatedSwipeAway,
    father: '25',
    exact: true,
    id: '30',
  },
  {
    path: advancedRealWorldEvolvingWriteButtonPath(),
    title: ADVANCED_REAL_WORLD_EVOLVING_WRITE_BUTTON_TITLE,
    component: AdvancedRealWorldEvolvingWriteButton,
    father: '25',
    exact: true,
    id: '31',
  },
  {
    path: advancedRealWorldExpandingNotifyInputWithSuccessMessagePath(),
    title: ADVANCED_REAL_WORLD_EXPANDING_NOTIFY_INPUT_WITH_SUCCESS_MESSAGE_TITLE,
    component: AdvancedRealWorldExpandingNotifyInputWithSuccessMessage,
    father: '25',
    exact: true,
    id: '32',
  },
  {
    path: advancedRealWorldExplodingHeartButtonPath(),
    title: ADVANCED_REAL_WORLD_EXPLODING_HEART_BUTTON_TITLE,
    component: AdvancedRealWorldExplodingHeartButton,
    father: '25',
    exact: true,
    id: '33',
  },
  {
    path: advancedRealWorldFloatingActionButtonWithMenuPath(),
    title: ADVANCED_REAL_WORLD_FLOATING_ACTION_BUTTON_WITH_MENU_TITLE,
    component: AdvancedRealWorldFloatingActionButtonWithMenu,
    father: '25',
    exact: true,
    id: '34',
  },
  {
    path: advancedRealWorldPhotoGridSharedElementPath(),
    title: ADVANCED_REAL_WORLD_PHOTO_GRID_SHARED_ELEMENT_TITLE,
    component: AdvancedRealWorldPhotoGridSharedElement,
    father: '25',
    exact: true,
    id: '35',
  },
  {
    path: advancedRealWorldTapToShowLoveFloatingHeartsPath(),
    title: ADVANCED_REAL_WORLD_TAP_TO_SHOW_LOVE_FLOATING_HEARTS_TITLE,
    component: AdvancedRealWorldTapToShowLoveFloatingHearts,
    father: '25',
    exact: true,
    id: '36',
  },
];

export default advancedRealWorldRoutes;
