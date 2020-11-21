/**
 * @flow
 */

import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import type { RouterType } from '../../routes/routes.types';

type SectionListProps = {
  data: RouterType
}

export function SectionList(props: SectionListProps): React$Node {
  const { data } = props;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Link
            to={item.path}
            underlayColor="#eee"
          >
            <Text style={{
              textAlign: 'center',
              fontSize: 24,
            }}
            >
              {item.title}
            </Text>
          </Link>
        )}
      />
    </View>
  );
}
