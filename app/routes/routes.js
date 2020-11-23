/* eslint-disable max-len */
/**
 * @flow
 */

import type {
  RouterType,
  ModuleAnimationsPathType,
  ModulesAnimationsTitleType,
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
  AnimatedValueFunctionsEasingPathType,
  AnimatedValueFunctionsEasingTitleType,
  AnimationsAnimatedFunctionsPathType,
  AnimationsAnimatedFunctionsTitleType,
  AnimatedFunctionsAddPathType,
  AnimatedFunctionsAddTitleType,
  AnimatedFunctionsDecayPathType,
  AnimatedFunctionsDecayTitleType,
  AnimatedFunctionsDividePathType,
  AnimatedFunctionsDivideTitleType,
  AnimatedFunctionsEventPathType,
  AnimatedFunctionsEventTitleType,
  AnimatedFunctionsModuloPathType,
  AnimatedFunctionsModuloTitleType,
  AnimatedFunctionsMultiplyPathType,
  AnimatedFunctionsMultiplyTitleType,
  AnimatedFunctionsSpringPathType,
  AnimatedFunctionsSpringTitleType,
  AnimationsCombiningAnimationsPathType,
  AnimationsCombiningAnimationsTitleType,
  CombiningAnimationsDelayPathType,
  CombiningAnimationsDelayTitleType,
  CombiningAnimationsParallelPathType,
  CombiningAnimationsParallelTitleType,
  CombiningAnimationsSequencePathType,
  CombiningAnimationsSequenceTitleType,
  CombiningAnimationsStaggerPathType,
  CombiningAnimationsStaggerTitleType,
  AnimationsAdvancedRealWorldPathType,
  AnimationsAdvancedRealWorldTitleType,
  AdvancedRealWorldAnimatedColorPickerPathType,
  AdvancedRealWorldAnimatedColorPickerTitleType,
  AdvancedRealWorldApplicationIntroScreenPathType,
  AdvancedRealWorldApplicationIntroScreenTitleType,
  AdvancedRealWorldBouncingHeartShapedLikeButtonOnPressPathType,
  AdvancedRealWorldBouncingHeartShapedLikeButtonOnPressTitleType,
  AdvancedRealWorldCreateAHorizontalParallaxScrollViewPathType,
  AdvancedRealWorldCreateAHorizontalParallaxScrollViewTitleType,
  AdvancedRealWorldCreateASocialCommentModalWithAnimatedSwipeAwayPathType,
  AdvancedRealWorldCreateASocialCommentModalWithAnimatedSwipeAwayTitleType,
  AdvancedRealWorldEvolvingWriteButtonPathType,
  AdvancedRealWorldEvolvingWriteButtonTitleType,
  AdvancedRealWorldExpandingNotifyInputWithSuccessMessagePathType,
  AdvancedRealWorldExpandingNotifyInputWithSuccessMessageTitleType,
  AdvancedRealWorldExplodingHeartButtonPathType,
  AdvancedRealWorldExplodingHeartButtonTitleType,
  AdvancedRealWorldFloatingActionButtonWithMenuPathType,
  AdvancedRealWorldFloatingActionButtonWithMenuTitleType,
  AdvancedRealWorldPhotoGridSharedElementPathType,
  AdvancedRealWorldPhotoGridSharedElementTitleType,
  AdvancedRealWorldTapToShowLoveFloatingHeartsPathType,
  AdvancedRealWorldTapToShowLoveFloatingHeartsTitleType,
  AnimationsAnimatedTechniquesPathType,
  AnimationsAnimatedTechniquesTitleType,
  AnimatedTechniquesAnimateHiddenPathType,
  AnimatedTechniquesAnimateHiddenTitleType,
  AnimatedTechniquesCliffPathType,
  AnimatedTechniquesCliffTitleType,
  AnimationsBasicRealWorldPathType,
  AnimationsBasicRealWorldTitleType,
  BasicRealWorldAnimatedProgressBarButtonPathType,
  BasicRealWorldAnimatedProgressBarButtonTitleType,
  BasicRealWorldAnimatedQuestionnaireWithProgressPathType,
  BasicRealWorldAnimatedQuestionnaireWithProgressTitleType,
  BasicRealWorldCornersPathType,
  BasicRealWorldCornersTitleType,
  BasicRealWorldDynamicAnimatedNotificationsPathType,
  BasicRealWorldDynamicAnimatedNotificationsTitleType,
  BasicRealWorldKittenCardsPathType,
  BasicRealWorldKittenCardsTitleType,
  BasicRealWorldStaggerFromItemsVisibilityOnMountPathType,
  BasicRealWorldStaggerFromItemsVisibilityOnMountTitleType,
  BasicRealWorldStaggeredHeadsPathType,
  BasicRealWorldStaggeredHeadsTitleType,
  AnimationsInterpolationPathType,
  AnimationsInterpolationTitleType,
  InterpolationColorAndBackgroundColorPathType,
  InterpolationColorAndBackgroundColorTitleType,
  InterpolationExtrapolatePathType,
  InterpolationExtrapolateTitleType,
  InterpolationNumbersAndInterpolateOnInterpolatesPathType,
  InterpolationNumbersAndInterpolateOnInterpolatesTitleType,
  InterpolationRotationPathType,
  InterpolationRotationTitleType,
  AnimationsNativeAnimationsPathType,
  AnimationsNativeAnimationsTitleType,
  AnimationsUnderstandingHowAnimatedWorksPathType,
  AnimationsUnderstandingHowAnimatedWorksTitleType,
  UnderstandingHowAnimatedWorksCreateAnimatedComponentPathType,
  UnderstandingHowAnimatedWorksCreateAnimatedComponentTitleType,
  UnderstandingHowAnimatedWorksUsingAndUnderstandingSetNativePropsPathType,
  UnderstandingHowAnimatedWorksUsingAndUnderstandingSetNativePropsTitleType,
  UnderstandingHowAnimatedWorksUsingArtMorphTweenAndAnimatedToAnimateComplexSVGPathsPathType,
  UnderstandingHowAnimatedWorksUsingArtMorphTweenAndAnimatedToAnimateComplexSVGPathsTitleType,
  UnderstandingHowAnimatedWorksUsingD3InterpolatePathAndAnimatedToAnimateSimpleSVGPathsPathType,
  UnderstandingHowAnimatedWorksUsingD3InterpolatePathAndAnimatedToAnimateSimpleSVGPathsTitleType,
  UnderstandingHowAnimatedWorksUsingD3InterpolateWithAnimatedPathType,
  UnderstandingHowAnimatedWorksUsingD3InterpolateWithAnimatedTitleType,
  UnderstandingHowAnimatedWorksUsingFlubberAndAnimatedForBetterSVGPathMorphingPathType,
  UnderstandingHowAnimatedWorksUsingFlubberAndAnimatedForBetterSVGPathMorphingTitleType,
  AnimatedTechniquesPointerEventsPathType,
  AnimatedTechniquesPointerEventsTitleType,
  NativeAnimationsTimingNativePathType,
  NativeAnimationsTimingNativeTitleType,
  NativeAnimationsScrollNativePathType,
  NativeAnimationsScrollNativeTitleType,
  NativeAnimationsSpringNativePathType,
  NativeAnimationsSpringNativeTitleType,
  ModuleSettingsPathType,
  ModulesSettingsTitleType,
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
  AnimatedValueFunctionsEasing,
  AnimationsAnimatedFunctions,
  AnimatedFunctionsAdd,
  AnimatedFunctionsDecay,
  AnimatedFunctionsDivide,
  AnimatedFunctionsEvent,
  AnimatedFunctionsModulo,
  AnimatedFunctionsMultiply,
  AnimatedFunctionsSpring,
  CombiningAnimationsDelay,
  CombiningAnimationsParallel,
  CombiningAnimationsSequence,
  CombiningAnimationsStagger,
  AnimationsAdvancedRealWorld,
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
  AnimationsAnimatedTechniques,
  AnimatedTechniquesAnimateHidden,
  AnimatedTechniquesCliff,
  AnimationsBasicRealWorld,
  BasicRealWorldAnimatedProgressBarButton,
  BasicRealWorldAnimatedQuestionnaireWithProgress,
  BasicRealWorldCorners,
  BasicRealWorldDynamicAnimatedNotifications,
  BasicRealWorldKittenCards,
  BasicRealWorldStaggerFromItemsVisibilityOnMount,
  BasicRealWorldStaggeredHeads,
  AnimationsInterpolation,
  InterpolationColorAndBackgroundColor,
  InterpolationExtrapolate,
  InterpolationNumbersAndInterpolateOnInterpolates,
  InterpolationRotation,
  AnimationsNativeAnimations,
  AnimationsUnderstandingHowAnimatedWorks,
  UnderstandingHowAnimatedWorksCreateAnimatedComponent,
  UnderstandingHowAnimatedWorksUsingAndUnderstandingSetNativeProps,
  UnderstandingHowAnimatedWorksUsingArtMorphTweenAndAnimatedToAnimateComplexSVGPaths,
  UnderstandingHowAnimatedWorksUsingD3InterpolatePathAndAnimatedToAnimateSimpleSVGPaths,
  UnderstandingHowAnimatedWorksUsingD3InterpolateWithAnimated,
  UnderstandingHowAnimatedWorksUsingFlubberAndAnimatedForBetterSVGPathMorphing,
  AnimationsCombiningAnimations,
  AnimatedTechniquesPointerEvents,
  NativeAnimationsTimingNative,
  NativeAnimationsScrollNative,
  NativeAnimationsSpringNative,
  ModuleSettings,
} from '../modules';

export const modulesPath = (): ModulesPathType => '/';
export const MODULES_TITLE: ModulesTitleType = 'Modules';

export const moduleAnimationsPath = (): ModuleAnimationsPathType => '/animations';
export const MODULE_ANIMATIONS_TITLE: ModulesAnimationsTitleType = 'Animations';

export const moduleSettingsPath = (): ModuleSettingsPathType => '/settings';
export const MODULE_SETTINGS_TITLE: ModulesSettingsTitleType = 'Settings';

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

export const animatedValueFunctionsEasingPath = (): AnimatedValueFunctionsEasingPathType => '/animations/animated-value-functions/easing';
export const ANIMATED_VALUE_FUNCTIONS_EASING_TITLE: AnimatedValueFunctionsEasingTitleType = 'Easing';

export const animationsAnimatedFunctionsPath = (): AnimationsAnimatedFunctionsPathType => '/animations/animated-functions';
export const ANIMATIONS_ANIMATED_FUNCTIONS_TITLE: AnimationsAnimatedFunctionsTitleType = 'Animated Functions';

export const animatedFunctionsAddPath = (): AnimatedFunctionsAddPathType => '/animations/animated-functions/add';
export const ANIMATED_FUNCTIONS_ADD_TITLE: AnimatedFunctionsAddTitleType = 'Add';

export const animatedFunctionsDecayPath = (): AnimatedFunctionsDecayPathType => '/animations/animated-functions/decay';
export const ANIMATED_FUNCTIONS_DECAY_TITLE: AnimatedFunctionsDecayTitleType = 'Decay';

export const animatedFunctionsDividePath = (): AnimatedFunctionsDividePathType => '/animations/animated-functions/divide';
export const ANIMATED_FUNCTIONS_DIVIDE_TITLE: AnimatedFunctionsDivideTitleType = 'Divide';

export const animatedFunctionsEventPath = (): AnimatedFunctionsEventPathType => '/animations/animated-functions/event';
export const ANIMATED_FUNCTIONS_EVENT_TITLE: AnimatedFunctionsEventTitleType = 'Event';

export const animatedFunctionsModuloPath = (): AnimatedFunctionsModuloPathType => '/animations/animated-functions/modulo';
export const ANIMATED_FUNCTIONS_MODULO_TITLE: AnimatedFunctionsModuloTitleType = 'Modulo';

export const animatedFunctionsMultiplyPath = (): AnimatedFunctionsMultiplyPathType => '/animations/animated-functions/multiply';
export const ANIMATED_FUNCTIONS_MULTIPLY_TITLE: AnimatedFunctionsMultiplyTitleType = 'Multiply';

export const animatedFunctionsSpringPath = (): AnimatedFunctionsSpringPathType => '/animations/animated-functions/spring';
export const ANIMATED_FUNCTIONS_SPRING_TITLE: AnimatedFunctionsSpringTitleType = 'Spring';

export const animationsCombiningAnimationsPath = (): AnimationsCombiningAnimationsPathType => '/animations/combining-animations';
export const ANIMATIONS_COMBINING_ANIMATIONS_TITLE: AnimationsCombiningAnimationsTitleType = 'Combining Animations';

export const combiningAnimationsDelayPath = (): CombiningAnimationsDelayPathType => '/animations/combining-animations/delay';
export const COMBINING_ANIMATIONS_DELAY_TITLE: CombiningAnimationsDelayTitleType = 'Delay';

export const combiningAnimationsParallelPath = (): CombiningAnimationsParallelPathType => '/animations/combining-animations/parallel';
export const COMBINING_ANIMATIONS_PARALLEL_TITLE: CombiningAnimationsParallelTitleType = 'Parallel';

export const combiningAnimationsSequencePath = (): CombiningAnimationsSequencePathType => '/animations/combining-animations/sequence';
export const COMBINING_ANIMATIONS_SEQUENCE_TITLE: CombiningAnimationsSequenceTitleType = 'Sequence';

export const combiningAnimationsStaggerPath = (): CombiningAnimationsStaggerPathType => '/animations/combining-animations/stagger';
export const COMBINING_ANIMATIONS_STAGGER_TITLE: CombiningAnimationsStaggerTitleType = 'Stagger';

export const animationsAdvancedRealWorldPath = (): AnimationsAdvancedRealWorldPathType => '/animations/advanced-real-world';
export const ANIMATIONS_ADVANCED_REAL_WORLD_TITLE: AnimationsAdvancedRealWorldTitleType = 'Advanced Real World';

export const advancedRealWorldAnimatedColorPickerPath = (): AdvancedRealWorldAnimatedColorPickerPathType => '/animations/advanced-real-world/animated-color-picker';
export const ADVANCED_REAL_WORLD_ANIMATED_COLOR_PICKER_TITLE: AdvancedRealWorldAnimatedColorPickerTitleType = 'Animated Color Picker';

export const advancedRealWorldApplicationIntroScreenPath = (): AdvancedRealWorldApplicationIntroScreenPathType => '/animations/advanced-real-world/application-intro-screen';
export const ADVANCED_REAL_WORLD_APPLICATION_INTRO_SCREEN_TITLE: AdvancedRealWorldApplicationIntroScreenTitleType = 'Application Intro Screen';

export const advancedRealWorldBouncingHeartShapedLikeButtonOnPressPath = (): AdvancedRealWorldBouncingHeartShapedLikeButtonOnPressPathType => '/animations/advanced-real-world/bouncing-heart-shaped-like-button-on-press';
export const ADVANCED_REAL_WORLD_BOUNCING_HEART_SHAPED_LIKE_BUTTON_ON_PRESS_TITLE: AdvancedRealWorldBouncingHeartShapedLikeButtonOnPressTitleType = 'Bouncing Heart Shaped Like Button On Press';

export const advancedRealWorldCreateAHorizontalParallaxScrollViewPath = (): AdvancedRealWorldCreateAHorizontalParallaxScrollViewPathType => '/animations/advanced-real-world/create-a-horizontal-parallax-scroll-view';
export const ADVANCED_REAL_WORLD_CREATE_A_HORIZONTAL_PARALLAX_SCROLL_VIEW_TITLE: AdvancedRealWorldCreateAHorizontalParallaxScrollViewTitleType = 'Create A Horizontal Parallax Scroll View';

export const advancedRealWorldCreateASocialCommentModalWithAnimatedSwipeAwayPath = (): AdvancedRealWorldCreateASocialCommentModalWithAnimatedSwipeAwayPathType => '/animations/advanced-real-world/create-a-social-comment-modal-with-animated-swipe-away';
export const ADVANCED_REAL_WORLD_CREATE_A_SOCIAL_COMMENT_MODAL_WITH_ANIMATED_SWIPE_AWAY_TITLE: AdvancedRealWorldCreateASocialCommentModalWithAnimatedSwipeAwayTitleType = 'CreateASocialCommentModalWithAnimatedSwipeAway';

export const advancedRealWorldEvolvingWriteButtonPath = (): AdvancedRealWorldEvolvingWriteButtonPathType => '/animations/advanced-real-world/evolving-write-button';
export const ADVANCED_REAL_WORLD_EVOLVING_WRITE_BUTTON_TITLE: AdvancedRealWorldEvolvingWriteButtonTitleType = 'Evolving Write Button';

export const advancedRealWorldExpandingNotifyInputWithSuccessMessagePath = (): AdvancedRealWorldExpandingNotifyInputWithSuccessMessagePathType => '/animations/advanced-real-world/expanding-notify-input-with-success-message';
export const ADVANCED_REAL_WORLD_EXPANDING_NOTIFY_INPUT_WITH_SUCCESS_MESSAGE_TITLE: AdvancedRealWorldExpandingNotifyInputWithSuccessMessageTitleType = 'ExpandingNotifyInputWithSuccessMessage';

export const advancedRealWorldExplodingHeartButtonPath = (): AdvancedRealWorldExplodingHeartButtonPathType => '/animations/advanced-real-world/exploding-heart-button';
export const ADVANCED_REAL_WORLD_EXPLODING_HEART_BUTTON_TITLE: AdvancedRealWorldExplodingHeartButtonTitleType = 'ExplodingHeartButton';

export const advancedRealWorldFloatingActionButtonWithMenuPath = (): AdvancedRealWorldFloatingActionButtonWithMenuPathType => '/animations/advanced-real-world/floating-action-button-with-menu';
export const ADVANCED_REAL_WORLD_FLOATING_ACTION_BUTTON_WITH_MENU_TITLE: AdvancedRealWorldFloatingActionButtonWithMenuTitleType = 'Floating Action Button With Menu';

export const advancedRealWorldPhotoGridSharedElementPath = (): AdvancedRealWorldPhotoGridSharedElementPathType => '/animations/advanced-real-world/photo-grid-shared-element';
export const ADVANCED_REAL_WORLD_PHOTO_GRID_SHARED_ELEMENT_TITLE: AdvancedRealWorldPhotoGridSharedElementTitleType = 'PhotoGridSharedElement';

export const advancedRealWorldTapToShowLoveFloatingHeartsPath = (): AdvancedRealWorldTapToShowLoveFloatingHeartsPathType => '/animations/advanced-real-world/tap-to-show-love-floating-hearts';
export const ADVANCED_REAL_WORLD_TAP_TO_SHOW_LOVE_FLOATING_HEARTS_TITLE: AdvancedRealWorldTapToShowLoveFloatingHeartsTitleType = 'Tap To Show Love Floating Hearts';

export const animationsAnimatedTechniquesPath = (): AnimationsAnimatedTechniquesPathType => '/animations/animated-techniques';
export const ANIMATIONS_ANIMATED_TECHNIQUES_TITLE: AnimationsAnimatedTechniquesTitleType = 'Animated Techniques';

export const animatedTechniquesAnimateHiddenPath = (): AnimatedTechniquesAnimateHiddenPathType => '/animations/animated-techniques/animate-hidden';
export const ANIMATED_TECHNIQUES_ANIMATE_HIDDEN_TITLE: AnimatedTechniquesAnimateHiddenTitleType = 'Animate Hidden';

export const animatedTechniquesCliffPath = (): AnimatedTechniquesCliffPathType => '/animations/animated-techniques/cliff';
export const ANIMATED_TECHNIQUES_CLIFF_TITLE: AnimatedTechniquesCliffTitleType = 'Cliff';

export const animatedTechniquesPointerEventsPath = (): AnimatedTechniquesPointerEventsPathType => '/animations/animated-techniques/pointer-events';
export const ANIMATED_TECHNIQUES_POINTER_EVENTS_TITLE: AnimatedTechniquesPointerEventsTitleType = 'Pointer Events';

export const animationsBasicRealWorldPath = (): AnimationsBasicRealWorldPathType => '/animations/basic-real-world';
export const ANIMATIONS_BASIC_REAL_WORLD_TITLE: AnimationsBasicRealWorldTitleType = 'Basic Real World';

export const basicRealWorldAnimatedProgressBarButtonPath = (): BasicRealWorldAnimatedProgressBarButtonPathType => '/animations/basic-real-world/animated-progress-bar-button';
export const BASIC_REAL_WORLD_ANIMATED_PROGRESS_BAR_BUTTON_TITLE: BasicRealWorldAnimatedProgressBarButtonTitleType = 'Animated Progress Bar Button';

export const basicRealWorldAnimatedQuestionnaireWithProgressPath = (): BasicRealWorldAnimatedQuestionnaireWithProgressPathType => '/animations/basic-real-world/animated-questionnaire-with-progress';
export const BASIC_REAL_WORLD_ANIMATED_QUESTIONNAIRE_WITH_PROGRESS_TITLE: BasicRealWorldAnimatedQuestionnaireWithProgressTitleType = 'Animated Questionnaire With Progress';

export const basicRealWorldCornersPath = (): BasicRealWorldCornersPathType => '/animations/basic-real-world/corners';
export const BASIC_REAL_WORLD_CORNERS_TITLE: BasicRealWorldCornersTitleType = 'Corners';

export const basicRealWorldDynamicAnimatedNotificationsPath = (): BasicRealWorldDynamicAnimatedNotificationsPathType => '/animations/basic-real-world/dynamic-animated-notifications';
export const BASIC_REAL_WORLD_DYNAMIC_ANIMATED_NOTIFICATIONS_TITLE: BasicRealWorldDynamicAnimatedNotificationsTitleType = 'Dynamic Animated Notifications';

export const basicRealWorldKittenCardsPath = (): BasicRealWorldKittenCardsPathType => '/animations/basic-real-world/kitten-cards';
export const BASIC_REAL_WORLD_KITTEN_CARDS_TITLE: BasicRealWorldKittenCardsTitleType = 'KittenCards';

export const basicRealWorldStaggerFromItemsVisibilityOnMountPath = (): BasicRealWorldStaggerFromItemsVisibilityOnMountPathType => '/animations/basic-real-world/stagger-from-items-visibility-on-mount';
export const BASIC_REAL_WORLD_STAGGER_FROM_ITEMS_VISIBILITY_ON_MOUNT_TITLE: BasicRealWorldStaggerFromItemsVisibilityOnMountTitleType = 'Stagger From Items Visibility On Mount';

export const basicRealWorldStaggeredHeadsPath = (): BasicRealWorldStaggeredHeadsPathType => '/animations/basic-real-world/staggered-heads';
export const BASIC_REAL_WORLD_STAGGERED_HEADS_TITLE: BasicRealWorldStaggeredHeadsTitleType = 'Staggered Heads';

export const animationsInterpolationPath = (): AnimationsInterpolationPathType => '/animations/interpolations';
export const ANIMATIONS_INTERPOLATION_TITLE: AnimationsInterpolationTitleType = 'Interpolations';

export const interpolationColorAndBackgroundColorPath = (): InterpolationColorAndBackgroundColorPathType => '/animations/interpolations/color-and-background-color';
export const INTERPOLATION_COLOR_AND_BACKGROUND_COLOR_TITLE: InterpolationColorAndBackgroundColorTitleType = 'Color And BackgroundColor';

export const interpolationExtrapolatePath = (): InterpolationExtrapolatePathType => '/animations/interpolations/extrapolate';
export const INTERPOLATION_EXTRAPOLATE_TITLE: InterpolationExtrapolateTitleType = 'Extrapolate';

export const interpolationNumbersAndInterpolateOnInterpolatesPath = (): InterpolationNumbersAndInterpolateOnInterpolatesPathType => '/animations/interpolations/numbers-and-interpolate-on-interpolates';
export const INTERPOLATION_NUMBERS_AND_INTERPOLATE_ON_INTERPOLATES_TITLE: InterpolationNumbersAndInterpolateOnInterpolatesTitleType = 'Numbers And Interpolate On Interpolates';

export const interpolationRotationPath = (): InterpolationRotationPathType => '/animations/interpolations/rotation';
export const INTERPOLATION_ROTATION_TITLE: InterpolationRotationTitleType = 'Rotation';

export const animationsNativeAnimationsPath = (): AnimationsNativeAnimationsPathType => '/animations/native-animations';
export const ANIMATIONS_NATIVE_ANIMATIONS_TITLE: AnimationsNativeAnimationsTitleType = 'Native Animations';

export const nativeAnimationsTimingNativePath = (): NativeAnimationsTimingNativePathType => '/animations/native-animations/timing-native';
export const NATIVE_ANIMATIONS_TIMING_NATIVE_TITLE: NativeAnimationsTimingNativeTitleType = 'Timing Native';

export const nativeAnimationsScrollNativePath = (): NativeAnimationsScrollNativePathType => '/animations/native-animations/scroll-native';
export const NATIVE_ANIMATIONS_SCROLL_NATIVE_TITLE: NativeAnimationsScrollNativeTitleType = 'Scroll Native';

export const nativeAnimationsSpringNativePath = (): NativeAnimationsSpringNativePathType => '/animations/native-animations/spring-native';
export const NATIVE_ANIMATIONS_SPRING_NATIVE_TITLE: NativeAnimationsSpringNativeTitleType = 'Spring Native';

export const animationsUnderstandingHowAnimatedWorksPath = (): AnimationsUnderstandingHowAnimatedWorksPathType => '/animations/understanding-how-animated-works';
export const ANIMATIONS_UNDERSTANDING_HOW_ANIMATED_WORKS_TITLE: AnimationsUnderstandingHowAnimatedWorksTitleType = 'Understanding How Animated Works';

export const understandingHowAnimatedWorksCreateAnimatedComponentPath = (): UnderstandingHowAnimatedWorksCreateAnimatedComponentPathType => '/animations/understanding-how-animated-works/create-animated-component';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_CREATE_ANIMATED_COMPONENT_TITLE: UnderstandingHowAnimatedWorksCreateAnimatedComponentTitleType = 'Create Animated Component';

export const understandingHowAnimatedWorksUsingAndUnderstandingSetNativePropsPath = (): UnderstandingHowAnimatedWorksUsingAndUnderstandingSetNativePropsPathType => '/animations/understanding-how-animated-works/using-and-understanding-set-native-props';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_USING_AND_UNDERSTANDING_SET_NATIVE_PROPS_TITLE: UnderstandingHowAnimatedWorksUsingAndUnderstandingSetNativePropsTitleType = 'Using And Understanding Set Native Props';

export const understandingHowAnimatedWorksUsingArtMorphTweenAndAnimatedToAnimateComplexSvgPathsPath = (): UnderstandingHowAnimatedWorksUsingArtMorphTweenAndAnimatedToAnimateComplexSVGPathsPathType => '/animations/understanding-how-animated-works/using-art-morph-tween-to-animate-complex-svg-paths';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_USING_ART_MORPH_TWEEN_AND_ANIMATED_TO_ANIMATE_COMPLEX_SVG_PATHS_TITLE: UnderstandingHowAnimatedWorksUsingArtMorphTweenAndAnimatedToAnimateComplexSVGPathsTitleType = 'Using Art Morph Tween And Animated To Animate Complex SVG Paths';

export const understandingHowAnimatedWorksUsingD3InterpolatePathAndAnimatedToAnimateSimpleSvgPathsPath = (): UnderstandingHowAnimatedWorksUsingD3InterpolatePathAndAnimatedToAnimateSimpleSVGPathsPathType => '/animations/understanding-how-animated-works/using-d3-interpolate-path-to-animate-simple-svg-paths';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_USING_D3_INTERPOLATE_PATH_AND_ANIMATED_TO_ANIMATE_SIMPLE_SVG_PATHS_TITLE: UnderstandingHowAnimatedWorksUsingD3InterpolatePathAndAnimatedToAnimateSimpleSVGPathsTitleType = 'Using D3 Interpolate Path And Animated To Animate Simple SVG Paths';

export const understandingHowAnimatedWorksUsingD3InterpolateWithAnimatedPath = (): UnderstandingHowAnimatedWorksUsingD3InterpolateWithAnimatedPathType => '/animations/understanding-how-animated-works/using-d3-interpolate-with-animated';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_USING_D3_INTERPOLATE_WITH_ANIMATED_TITLE: UnderstandingHowAnimatedWorksUsingD3InterpolateWithAnimatedTitleType = 'Using D3 Interpolate With Animated';

export const understandingHowAnimatedWorksUsingFlubberAndAnimatedForBetterSvgPathMorphingPath = (): UnderstandingHowAnimatedWorksUsingFlubberAndAnimatedForBetterSVGPathMorphingPathType => '/animations/understanding-how-animated-works/using-flubber-and-animated-for-better-svg-path-morphing';
export const UNDERSTANDING_HOW_ANIMATED_WORKS_USING_FLUBBER_AND_ANIMATED_FOR_BETTER_SVG_PATH_MORPHING_TITLE: UnderstandingHowAnimatedWorksUsingFlubberAndAnimatedForBetterSVGPathMorphingTitleType = 'Using Flubber And Animated For Better SVG Path Morphing';

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
  {
    path: animatedValueFunctionsEasingPath(),
    title: ANIMATED_VALUE_FUNCTIONS_EASING_TITLE,
    father: '11',
    component: AnimatedValueFunctionsEasing,
    exact: true,
    id: '12',
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
    path: animatedFunctionsAddPath(),
    title: ANIMATED_FUNCTIONS_ADD_TITLE,
    father: '13',
    component: AnimatedFunctionsAdd,
    exact: true,
    id: '14',
  },
  {
    path: animatedFunctionsDecayPath(),
    title: ANIMATED_FUNCTIONS_DECAY_TITLE,
    father: '13',
    component: AnimatedFunctionsDecay,
    exact: true,
    id: '15',
  },
  {
    path: animatedFunctionsDividePath(),
    title: ANIMATED_FUNCTIONS_DIVIDE_TITLE,
    father: '13',
    component: AnimatedFunctionsDivide,
    exact: true,
    id: '16',
  },
  {
    path: animatedFunctionsEventPath(),
    title: ANIMATED_FUNCTIONS_EVENT_TITLE,
    father: '13',
    component: AnimatedFunctionsEvent,
    exact: true,
    id: '17',
  },
  {
    path: animatedFunctionsModuloPath(),
    title: ANIMATED_FUNCTIONS_MODULO_TITLE,
    father: '13',
    component: AnimatedFunctionsModulo,
    exact: true,
    id: '18',
  },
  {
    path: animatedFunctionsMultiplyPath(),
    title: ANIMATED_FUNCTIONS_MULTIPLY_TITLE,
    father: '13',
    component: AnimatedFunctionsMultiply,
    exact: true,
    id: '19',
  },
  {
    path: animatedFunctionsSpringPath(),
    title: ANIMATED_FUNCTIONS_SPRING_TITLE,
    father: '13',
    component: AnimatedFunctionsSpring,
    exact: true,
    id: '20',
  },
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
  {
    path: animationsAdvancedRealWorldPath(),
    title: ANIMATIONS_ADVANCED_REAL_WORLD_TITLE,
    component: AnimationsAdvancedRealWorld,
    father: '0',
    exact: true,
    id: '25',
  },
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
  {
    path: animationsAnimatedTechniquesPath(),
    title: ANIMATIONS_ANIMATED_TECHNIQUES_TITLE,
    component: AnimationsAnimatedTechniques,
    father: '0',
    exact: true,
    id: '37',
  },
  {
    path: animatedTechniquesAnimateHiddenPath(),
    title: ANIMATED_TECHNIQUES_ANIMATE_HIDDEN_TITLE,
    component: AnimatedTechniquesAnimateHidden,
    father: '37',
    exact: true,
    id: '38',
  },
  {
    path: animatedTechniquesCliffPath(),
    title: ANIMATED_TECHNIQUES_CLIFF_TITLE,
    component: AnimatedTechniquesCliff,
    father: '37',
    exact: true,
    id: '39',
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
  {
    path: animationsInterpolationPath(),
    title: ANIMATIONS_INTERPOLATION_TITLE,
    component: AnimationsInterpolation,
    father: '0',
    exact: true,
    id: '48',
  },
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
  {
    path: animationsNativeAnimationsPath(),
    title: ANIMATIONS_NATIVE_ANIMATIONS_TITLE,
    component: AnimationsNativeAnimations,
    father: '0',
    exact: true,
    id: '53',
  },
  {
    path: nativeAnimationsTimingNativePath(),
    title: NATIVE_ANIMATIONS_TIMING_NATIVE_TITLE,
    component: NativeAnimationsTimingNative,
    father: '53',
    exact: true,
    id: '54',
  },
  {
    path: animationsUnderstandingHowAnimatedWorksPath(),
    title: ANIMATIONS_UNDERSTANDING_HOW_ANIMATED_WORKS_TITLE,
    component: AnimationsUnderstandingHowAnimatedWorks,
    father: '0',
    exact: true,
    id: '55',
  },
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
  {
    path: animationsCombiningAnimationsPath(),
    title: ANIMATIONS_COMBINING_ANIMATIONS_TITLE,
    component: AnimationsCombiningAnimations,
    father: '0',
    exact: true,
    id: '63',
  },
  {
    path: animatedTechniquesPointerEventsPath(),
    title: ANIMATED_TECHNIQUES_POINTER_EVENTS_TITLE,
    component: AnimatedTechniquesPointerEvents,
    father: '37',
    exact: true,
    id: '64',
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
  {
    path: moduleSettingsPath(),
    title: MODULE_SETTINGS_TITLE,
    father: '3',
    component: ModuleSettings,
    exact: true,
    id: '67',
  },
];

export default routes;
