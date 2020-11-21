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

export function CombiningAnimationsDelay(): React$Node {
  const colorAnimation = new Animated.Value(0);
  const scaleAnimation = new Animated.Value(1);

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(colorAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 2,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.delay(1500),
      Animated.parallel([
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(scaleAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  const backgroundColorInterpolate = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
  });
  const boxStyle = {
    backgroundColor: backgroundColorInterpolate,
    transform: [{ scale: scaleAnimation }],
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={startAnimation}>
        <Animated.View style={[styles.box, boxStyle]} />
      </Pressable>
    </View>
  );
}
