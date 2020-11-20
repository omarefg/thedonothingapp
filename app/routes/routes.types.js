/**
 * @flow
 */
import * as React from 'react';

// Level 0
export type ModulesPathType = '/'
export type ModulesTitleType = 'Modules'

// Level 1
export type ModuleAnimationsPathType = '/animations'
export type ModulesAnimationTitleType = 'Animations'

// Level 2
export type AnimationsAnimatingPropertiesPathType = '/animations/animating-properties'
export type AnimationsAnimatingPropertiesTitleType = 'Animating Properties'

// Level 3
export type AnimatingPropertiesOpacityPathType = '/animations/animating-properties/opacity'
export type AnimatingPropertiesOpacityTitleType = 'Opacity'

type PathType =
| ModulesPathType
| ModuleAnimationsPathType
| AnimationsAnimatingPropertiesPathType
| AnimatingPropertiesOpacityPathType

type TitleType =
| ModulesTitleType
| ModulesAnimationTitleType
| AnimationsAnimatingPropertiesTitleType
| AnimatingPropertiesOpacityTitleType

type RouteItemType = {
  path: PathType,
  title: TitleType,
  component: React.Node,
  level: number,
  exact: boolean,
  id: string
}

export type RouterType = RouteItemType[]
