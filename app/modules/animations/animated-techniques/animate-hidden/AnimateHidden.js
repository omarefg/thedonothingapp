/**
 * @flow
 */

import React, { useState } from 'react';
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

export function AnimatedTechniquesAnimateHidden(): React$Node {
  const animation = new Animated.Value(1);
  const [visible, setVisible] = useState<boolean>(true);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start(({ finished }) => {
      setTimeout(() => {
        if (finished) {
          setVisible(false);
        } else {
          Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: false,
          }).start();
        }
      }, 0);
    });
  };

  const translateYInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  const animatedStyles = {
    opacity: animation,
    transform: [
      {
        translateY: translateYInterpolate,
      },
    ],
  };

  return (
    <View style={styles.container}>
      {visible && (
      <Pressable onPress={startAnimation}>
        <Animated.View
          style={[styles.box, animatedStyles]}
        />
      </Pressable>
      )}
    </View>
  );
}
