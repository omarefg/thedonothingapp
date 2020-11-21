/**
 * @flow
 */

import React from 'react';
import {
  Animated,
  StyleSheet,
  Pressable,
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

export function InterpolationColorAndBackgroundColor(): React$Node {
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const colorInterpolate = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['rgb(71,255,99)', 'rgb(255,99,71)', 'rgb(99,71,255)'],
  });

  const bgStyle = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 2],
      outputRange: ['rgba(255,99,71, 1)', 'rgba(255,99,71, 0)'],
    }),
  };

  const animatedStyles = {
    backgroundColor: colorInterpolate,
  };

  return (
    <Animated.View style={[styles.container, bgStyle]}>
      <Pressable onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </Pressable>
    </Animated.View>
  );
}
