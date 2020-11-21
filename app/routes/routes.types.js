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

export type RouteItemType = {
  path: PathType,
  title: TitleType,
  component: React$Node,
  father: string | null,
  exact: boolean,
  id: string
}

export type RouterType = RouteItemType[]
