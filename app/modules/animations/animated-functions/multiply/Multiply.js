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

export function AnimatedFunctionsMultiply(): React$Node {
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 50,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  const randomValue = new Animated.Value(6);
  // const randomValue = 6;
  const newAnimation = Animated.multiply(animation, randomValue);

  const animatedStyles = {
    transform: [{ translateY: newAnimation }],
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
