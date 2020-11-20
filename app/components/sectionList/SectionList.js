/**
 * @flow
 */

import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Link, useHistory } from 'react-router-native';
import routes from '../../routes/routes';

type SectionListProps = {
  level: number
}

export function SectionList(props: SectionListProps): React.Node {
  const { level } = props;
  const { location: { pathname } } = useHistory();
  const title = routes.find((route) => route.path === pathname)?.title;

  return (
    <View>
      <FlatList
        ListHeaderComponent={<Text>{title}</Text>}
        data={routes.filter((route) => route.level === level)}
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
