/**
 * @flow
 */
import type { RouterType } from './routes.types';
import {
  ModuleAnimations,
  ModuleSettings,
} from '../modules';

export const moduleAnimationsPath = (): string => '/animations';
export const MODULE_ANIMATIONS_TITLE: string = 'Animations';

export const moduleSettingsPath = (): string => '/settings';
export const MODULE_SETTINGS_TITLE: string = 'Settings';

const modulesRoutes: RouterType = [
  {
    path: moduleAnimationsPath(),
    title: MODULE_ANIMATIONS_TITLE,
    father: '3',
    component: ModuleAnimations,
    exact: true,
    id: '0',
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

export default modulesRoutes;
