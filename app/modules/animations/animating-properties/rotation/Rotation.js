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

export function AnimatingPropertiesRotation(): React$Node {
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 360,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
    // outputRange: ["0deg", "180deg"],
    // outputRange: ["0deg", "-360deg"],
    // outputRange: ["0deg", "1080deg"],
  });

  const animatedStyles = {
    transform: [
      { rotate: rotateInterpolate },
      // { rotateX: rotateInterpolate },
      // { rotateY: rotateInterpolate },
    ],
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
