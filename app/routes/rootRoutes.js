/**
 * @flow
 */
import type { RouterType } from './routes.types';
import { Modules } from '../modules';

export const modulesPath = (): string => '/';
export const MODULES_TITLE: string = 'Modules';

const rootRoutes: RouterType = [
  {
    path: modulesPath(),
    title: MODULES_TITLE,
    father: null,
    component: Modules,
    exact: true,
    id: '3',
  },
];

export default rootRoutes;
