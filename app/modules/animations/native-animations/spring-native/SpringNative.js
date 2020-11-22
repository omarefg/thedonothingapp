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

export function NativeAnimationsSpringNative(): React$Node {
  const animation = new Animated.Value(1);

  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: 2,
      friction: 2,
      tension: 160,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    });
  };

  const animatedStyles = {
    transform: [{ scale: animation }],
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
