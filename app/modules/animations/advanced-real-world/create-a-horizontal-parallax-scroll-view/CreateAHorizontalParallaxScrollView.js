/* eslint-disable prefer-spread */
/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
/**
 * @flow
 */

import React, { useMemo } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Animated,
  useWindowDimensions,
} from 'react-native';

import Moment from './components/Moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  separator: {
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 5,
  },
});

const Images = [
  { image: require('./assets/drink1.jpg'), title: 'Vokda Cran' },
  { image: require('./assets/drink2.jpg'), title: 'Old Fashion' },
  { image: require('./assets/drink3.jpg'), title: 'Mule' },
  { image: require('./assets/drink4.jpg'), title: 'Strawberry Daiquiri' },
];

const getInterpolate = (animatedScroll, index, length, width) => {
  const inputRange = [
    index - 1 * width,
    index * width,
    (index + 1) * width,
  ];

  const outputRange = index === 0 ? [0, 0, 150] : [-300, 0, 150];

  return animatedScroll.interpolate({
    inputRange,
    outputRange,
    extrapolate: 'clamp',
  });
};

const getSeparator = (index, width) => (
  <View
    key={index}
    style={[styles.separator, { left: (index - 1) * width - 2.5 }]}
  />
);

export function AdvancedRealWorldCreateAHorizontalParallaxScrollView(): React$Node {
  const animatedScroll = useMemo(() => new Animated.Value(0), []);
  const { width } = useWindowDimensions();

  const handleOnScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: animatedScroll } } }],
    { useNativeDriver: false },
  );

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        onScroll={handleOnScroll}
      >
        {
            Images.map((image, index) => (
              <Moment
                key={index}
                image={image.image}
                title={image.title}
                translateX={getInterpolate(animatedScroll, index, Images.length, width)}
              />
            ))
          }
        {Array
          .apply(null, { length: Images.length + 1 })
          .map((_, index) => getSeparator(index, width))}
      </ScrollView>
    </View>
  );
}
