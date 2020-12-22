/**
 * @flow
 */

export type RouteItemType = {
  path: string,
  title: string,
  component: React$Node,
  father: string | null,
  exact: boolean,
  id: string
}

export type RouterType = RouteItemType[]
