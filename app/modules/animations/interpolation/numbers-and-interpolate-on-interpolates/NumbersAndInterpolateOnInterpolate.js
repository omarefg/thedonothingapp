/**
 * @flow
 */

import React from 'react';
import {
  Animated,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export function InterpolationNumbersAndInterpolateOnInterpolates(): React$Node {
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 2,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const animatedInterpolate = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 300, 0],
  });

  const interpolatedInterpolate = animatedInterpolate.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0.5],
  });

  const translateXInterpolate = animatedInterpolate.interpolate({
    inputRange: [0, 30, 50, 80, 100, 150, 299, 300],
    outputRange: [0, -30, -50, 80, -100, 300, 0, -100],
  });

  const animatedStyles = {
    transform: [
      { translateY: animatedInterpolate },
      { translateX: translateXInterpolate },
    ],
    opacity: interpolatedInterpolate,
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={startAnimation}>
        <Animated.View
          style={[styles.box, animatedStyles]}
        />
      </Pressable>
    </View>
  );
}
