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

export function InterpolationExtrapolate(): React$Node {
  const animation = new Animated.Value(1);

  const startAnimation = () => {
    Animated.timing(animation, {
      // toValue: 3,
      toValue: 2,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        // toValue: 0,
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();

      // animation.setValue(5);
    });
  };

  // extend: Default
  // clamp: Whatever the end values we've defined are the values they will stay at,
  // never go beyond
  // identity: Takes on the value of the Animated.Value that you're passing in
  // and ignores inputRange/outputRange

  const scaleInterpolate = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 2],
    extrapolate: 'identity',
    // extrapolate: 'clamp',
    // extrapolateLeft: 'clamp',
    // extrapolateRight: 'clamp',
  });

  const animatedStyles = {
    transform: [{ scale: scaleInterpolate }],
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
