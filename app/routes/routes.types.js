/**
 * @flow
 */

export type ModulesPathType = '/'
export type ModulesTitleType = 'Modules'

export type ModuleAnimationsPathType = '/animations'
export type ModulesAnimationTitleType = 'Animations'

export type AnimationsAnimatingPropertiesPathType = '/animations/animating-properties'
export type AnimationsAnimatingPropertiesTitleType = 'Animating Properties'

export type AnimationsAnimatedValueFunctionsPathType = '/animations/animated-value-functions'
export type AnimationsAnimatedValueFunctionsTitleType = 'Animated Value Functions'

export type AnimatingPropertiesOpacityPathType = '/animations/animating-properties/opacity'
export type AnimatingPropertiesOpacityTitleType = 'Opacity'

export type AnimatingPropertiesTranslatePositionPathType = '/animations/animating-properties/translate-position'
export type AnimatingPropertiesTranslatePositionTitleType = 'Translate Position'

export type AnimatingPropertiesScalePathType = '/animations/animating-properties/scale'
export type AnimatingPropertiesScaleTitleType = 'Scale'

export type AnimatingPropertiesWidthHeightPathType = '/animations/animating-properties/width-height'
export type AnimatingPropertiesWidthHeightTitleType = 'Width Height'

export type AnimatingPropertiesAbsolutePositiontPathType = '/animations/animating-properties/absolute-position'
export type AnimatingPropertiesAbsolutePositiontTitleType = 'Absolute Position'

export type AnimatingPropertiesColorAndBackgroundColorPathType = '/animations/animating-properties/color-and-background-color'
export type AnimatingPropertiesColorAndBackgroundColorTitleType = 'Color and Background Color'

export type AnimatingPropertiesRotationPathType = '/animations/animating-properties/rotation'
export type AnimatingPropertiesRotationTitleType = 'Rotation'

export type AnimatingPropertiesWidthHeightPercentagePathType = '/animations/animating-properties/width-height-percentage'
export type AnimatingPropertiesWidthHeightPercentageTitleType = 'Width Height Percentage'

export type AnimatedValueFunctionsEasingPathType = '/animations/animated-value-functions/easing'
export type AnimatedValueFunctionsEasingTitleType = 'Easing'

export type AnimationsAnimatedFunctionsPathType = '/animations/animated-functions'
export type AnimationsAnimatedFunctionsTitleType = 'Animated Functions'

export type AnimatedFunctionsAddPathType = '/animations/animated-functions/add'
export type AnimatedFunctionsAddTitleType = 'Add'

export type AnimatedFunctionsDecayPathType = '/animations/animated-functions/decay'
export type AnimatedFunctionsDecayTitleType = 'Decay'

export type AnimatedFunctionsDividePathType = '/animations/animated-functions/divide'
export type AnimatedFunctionsDivideTitleType = 'Divide'

export type AnimatedFunctionsEventPathType = '/animations/animated-functions/event'
export type AnimatedFunctionsEventTitleType = 'Event'

export type AnimatedFunctionsModuloPathType = '/animations/animated-functions/modulo'
export type AnimatedFunctionsModuloTitleType = 'Modulo'

export type AnimatedFunctionsMultiplyPathType = '/animations/animated-functions/multiply'
export type AnimatedFunctionsMultiplyTitleType = 'Multiply'

export type AnimatedFunctionsSpringPathType = '/animations/animated-functions/spring'
export type AnimatedFunctionsSpringTitleType = 'Spring'

type PathType =
| ModulesPathType
| ModuleAnimationsPathType
| AnimationsAnimatingPropertiesPathType
| AnimatingPropertiesOpacityPathType
| AnimatingPropertiesTranslatePositionPathType
| AnimatingPropertiesScalePathType
| AnimatingPropertiesWidthHeightPathType
| AnimatingPropertiesAbsolutePositiontPathType
| AnimatingPropertiesColorAndBackgroundColorPathType
| AnimatingPropertiesRotationPathType
| AnimatingPropertiesWidthHeightPercentagePathType
| AnimationsAnimatedValueFunctionsPathType
| AnimatedValueFunctionsEasingPathType
| AnimationsAnimatedFunctionsPathType
| AnimatedFunctionsAddPathType
| AnimatedFunctionsDecayPathType
| AnimatedFunctionsDividePathType
| AnimatedFunctionsEventPathType
| AnimatedFunctionsModuloPathType
| AnimatedFunctionsMultiplyPathType
| AnimatedFunctionsSpringPathType

type TitleType =
| ModulesTitleType
| ModulesAnimationTitleType
| AnimationsAnimatingPropertiesTitleType
| AnimatingPropertiesOpacityTitleType
| AnimatingPropertiesTranslatePositionTitleType
| AnimatingPropertiesScaleTitleType
| AnimatingPropertiesWidthHeightTitleType
| AnimatingPropertiesAbsolutePositiontTitleType
| AnimatingPropertiesColorAndBackgroundColorTitleType
| AnimatingPropertiesRotationTitleType
| AnimatingPropertiesWidthHeightPercentageTitleType
| AnimationsAnimatedValueFunctionsTitleType
| AnimatedValueFunctionsEasingTitleType
| AnimationsAnimatedFunctionsTitleType
| AnimatedFunctionsAddTitleType
| AnimatedFunctionsDecayTitleType
| AnimatedFunctionsDivideTitleType
| AnimatedFunctionsEventTitleType
| AnimatedFunctionsModuloTitleType
| AnimatedFunctionsMultiplyTitleType
| AnimatedFunctionsSpringTitleType

export type RouteItemType = {
  path: PathType,
  title: TitleType,
  component: React$Node,
  father: string | null,
  exact: boolean,
  id: string
}

export type RouterType = RouteItemType[]
