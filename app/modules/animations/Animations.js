/**
 * @flow
 */

import * as React from 'react';
import { SectionList } from '../../components';
import { HeaderProvider } from '../../providers';

export function ModuleAnimations(): React.Node {
  return (
    <HeaderProvider>
      <SectionList
        level={2}
      />
    </HeaderProvider>
  );
}
