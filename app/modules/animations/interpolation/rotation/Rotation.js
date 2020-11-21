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

export function InterpolationRotation(): React$Node {
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const xInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
    // outputRange: ["0rad", "6.28319rad"]
  });

  const yInterpolate = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '0deg', '180deg'],
    // outputRange: ["0rad", "0rad", "3.141595rad"]
  });

  const animatedStyles = {
    transform: [{ rotateX: xInterpolate }, { rotateY: yInterpolate }],
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
