/**
 * @flow
 */

import React from 'react';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import { Link } from 'react-router-native';
import type { RouterType } from '../routes/routes.types';

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
  },
  listItem: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  listItemText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
  },
});

type SectionListProps = {
  data: RouterType
}

export function SectionList(props: SectionListProps): React$Node {
  const { data } = props;

  return (
    <View>
      <FlatList
        data={data}
        style={styles.container}
        renderItem={({ item }) => (
          <Link
            to={item.path}
            underlayColor="rgba(0, 0, 0, 0.25)"
            style={styles.listItem}
          >
            <Text style={styles.listItemText}>
              {item.title}
            </Text>
          </Link>
        )}
      />
    </View>
  );
}
