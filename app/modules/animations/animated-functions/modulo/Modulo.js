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
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export function AnimatedFunctionsModulo(): React$Node {
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(animation, {
        toValue: 12,
        duration: 3500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const randomValue = 3;
  const newAnimation = Animated.modulo(animation, randomValue);

  const interpolated = newAnimation.interpolate({
    inputRange: [0, 3],
    outputRange: ['0deg', '270deg'],
  });

  const animatedStyles = {
    transform: [{ rotate: interpolated }],
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
