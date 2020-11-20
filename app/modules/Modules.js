/**
 * @flow
 */

import * as React from 'react';
import { SectionList } from '../components';
import { HeaderProvider } from '../providers';

export function Modules(): React.Node {
  return (
    <HeaderProvider>
      <SectionList
        level={1}
      />
    </HeaderProvider>
  );
}
