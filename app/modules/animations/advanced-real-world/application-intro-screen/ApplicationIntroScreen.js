/**
 * @flow
 */

import React, { useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  PixelRatio,
  useWindowDimensions,
} from 'react-native';

import * as Images from './assets';

const getScreen1Styles = (animation, width) => {
  const translateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  return {
    image2: {
      transform: [{ translateX }],
    },
  };
};

const getScreen2Styles = (animation, width) => {
  const inputRange = [0, width, width * 2];

  const translateY = animation.interpolate({
    inputRange,
    outputRange: [100, 0, -100],
    extrapolate: 'clamp',
  });

  const opacity = animation.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  return {
    image2: {
      opacity,
      transform: [{ translateY }],
    },
  };
};

const getScreen3Styles = (animation, width) => {
  const inputRange = [width, width * 2, width * 3];

  const scale = animation.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  const rotate = animation.interpolate({
    inputRange,
    outputRange: ['-180deg', '0deg', '180deg'],
    extrapolate: 'clamp',
  });

  return {
    image1: {
      transform: [{ scale }],
    },
    image2: {
      transform: [{ scale }, { rotate }],
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    backgroundColor: '#F89E20',
  },
  screenHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    flex: 1,
    alignItems: 'center',
  },
});

export function AdvancedRealWorldApplicationIntroScreen(): React$Node {
  const animation = useMemo(() => new Animated.Value(0), []);

  const { width, height } = useWindowDimensions();

  const screen1Styles = getScreen1Styles(animation, width);

  const screen2Styles = getScreen2Styles(animation, width);

  const screen3Styles = getScreen3Styles(animation, width);

  const handleOnScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: animation } } }],
    { useNativeDriver: false },
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        onScroll={handleOnScroll}
      >
        <View style={[styles.page, { width, height }]}>
          <View style={styles.screenHeader}>
            <Animated.Image
              source={Images.Image1}
              style={{
                width: PixelRatio.getPixelSizeForLayoutSize(75),
                height: PixelRatio.getPixelSizeForLayoutSize(63),
              }}
              resizeMode="contain"
            />

            <Animated.Image
              source={Images.Image2}
              style={[
                {
                  width: PixelRatio.getPixelSizeForLayoutSize(46),
                  height: PixelRatio.getPixelSizeForLayoutSize(28),
                  position: 'absolute',
                  top: 200,
                  left: 60,
                },
                screen1Styles.image2,
              ]}
              resizeMode="contain"
            />
            <Animated.Image
              source={Images.Image3}
              style={{
                width: PixelRatio.getPixelSizeForLayoutSize(23),
                height: PixelRatio.getPixelSizeForLayoutSize(17),
                position: 'absolute',
                top: 150,
                left: 60,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.screenText}>
            <Text>Screen 1</Text>
          </View>
        </View>
        <View style={[styles.page, { width, height }]}>
          <View style={styles.screenHeader}>
            <Animated.Image
              source={Images.Image1}
              style={{
                width: PixelRatio.getPixelSizeForLayoutSize(75),
                height: PixelRatio.getPixelSizeForLayoutSize(63),
              }}
              resizeMode="contain"
            />

            <Animated.Image
              source={Images.Image2}
              style={[
                {
                  width: PixelRatio.getPixelSizeForLayoutSize(46),
                  height: PixelRatio.getPixelSizeForLayoutSize(28),
                  position: 'absolute',
                  top: 200,
                  left: 60,
                },
                screen2Styles.image2,
              ]}
              resizeMode="contain"
            />
            <Animated.Image
              source={Images.Image3}
              style={{
                width: PixelRatio.getPixelSizeForLayoutSize(23),
                height: PixelRatio.getPixelSizeForLayoutSize(17),
                position: 'absolute',
                top: 150,
                left: 60,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.screenText}>
            <Text>Screen 2</Text>
          </View>
        </View>
        <View style={[styles.page, { width, height }]}>
          <View style={styles.screenHeader}>
            <Animated.Image
              source={Images.Image1}
              style={[
                {
                  width: PixelRatio.getPixelSizeForLayoutSize(75),
                  height: PixelRatio.getPixelSizeForLayoutSize(63),
                },
                screen3Styles.image1,
              ]}
              resizeMode="contain"
            />

            <Animated.Image
              source={Images.Image2}
              style={[
                {
                  width: PixelRatio.getPixelSizeForLayoutSize(46),
                  height: PixelRatio.getPixelSizeForLayoutSize(28),
                  position: 'absolute',
                  top: 200,
                  left: 60,
                },
                screen3Styles.image2,
              ]}
              resizeMode="contain"
            />
            <Animated.Image
              source={Images.Image3}
              style={{
                width: PixelRatio.getPixelSizeForLayoutSize(23),
                height: PixelRatio.getPixelSizeForLayoutSize(17),
                position: 'absolute',
                top: 150,
                left: 60,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.screenText}>
            <Text>Screen 3</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
