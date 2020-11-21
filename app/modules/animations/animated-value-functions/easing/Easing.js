/**
 * @flow
 */

import React from 'react';
import {
  Animated,
  StyleSheet,
  Pressable,
  View,
  Easing,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },

});

export function AnimatedValueFunctionsEasing(): React$Node {
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 100,
      duration: 500,
      //   easing: Easing.back(5),
      easing: Easing.bounce,
      //   easing: Easing.elastic(3),
      //   easing: Easing.bezier(0.06, 1, 0.86, 0.23),
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const animatedStyles = {
    transform: [{ translateY: animation }],
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
