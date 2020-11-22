/**
 * @flow
 */

import React, { useState } from 'react';
import {
  Animated,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
  },
  cover: {
    backgroundColor: 'transparent',
  },

});

export function AnimatedTechniquesPointerEvents(): React$Node {
  const animation = new Animated.Value(1);
  const [toggle, setToggle] = useState<boolean>(true);
  let pressed = false;

  const handleToggle = () => setToggle((prevState) => !prevState);

  const handlePress = () => {
    const toValue = pressed ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      useNativeDriver: false,
    }).start();
    pressed = !pressed;
  };

  const boxStyle = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
    }),
  };

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={handlePress}>
          <Animated.View style={[styles.box, boxStyle]} />
        </Pressable>
        <View
          style={[StyleSheet.absoluteFill, styles.cover]}
          pointerEvents={toggle ? 'none' : 'auto'}
        />
      </View>

      <TouchableOpacity onPress={handleToggle}>
        <View>
          <Text>
            Toggle Pointer Events:
            {' '}
            {toggle ? 'Activated' : 'Deactivated'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>

  );
}
