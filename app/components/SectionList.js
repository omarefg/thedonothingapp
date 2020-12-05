/**
 * @flow
 */

import React from 'react';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import { Link } from 'react-router-native';
import type { RouterType } from '../routes/routes.types';
import {
  ArrayHelper,
} from '../helpers';
import type { ThemeType } from '../styles/theme';
import { useTheme } from '../hooks';

const useStyles = (theme: ThemeType) => StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor,
    flex: 1,
  },
  flatList: {
    backgroundColor: theme.backgroundColor,
  },
  listItem: {
    borderBottomColor: theme.textColor,
    borderBottomWidth: 0.3,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  listItemText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
    color: theme.textColor,
  },
});

type SectionListProps = {
  data: RouterType
}

export function SectionList(props: SectionListProps): React$Node {
  const { data } = props;
  const { theme } = useTheme();
  const styles = useStyles(theme);
  const sortedData: RouterType = ArrayHelper.increasingSortWithKey(data, 'title');
  return (
    <View style={styles.container}>
      <FlatList
        data={sortedData}
        style={styles.flatList}
        renderItem={({ item }) => (
          <Link
            to={item.path}
            underlayColor={theme.underlayColor}
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
