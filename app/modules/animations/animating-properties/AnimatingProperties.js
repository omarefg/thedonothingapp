/**
 * @flow
 */

import * as React from 'react';
import { SectionList } from '../../../components';
import { HeaderProvider } from '../../../providers';

export function AnimationsAnimatingProperties(): React.Node {
  return (
    <HeaderProvider>
      <SectionList
        level={3}
      />
    </HeaderProvider>
  );
}
