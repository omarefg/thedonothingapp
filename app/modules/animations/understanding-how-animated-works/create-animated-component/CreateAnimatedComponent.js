/**
 * @flow
 */

import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const AnimatedButton = Animated.createAnimatedComponent(Button);

export function UnderstandingHowAnimatedWorksCreateAnimatedComponent(): React$Node {
  const animation = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  };

  const animatedColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
  });

  return (
    <View style={styles.container}>
      <AnimatedButton
        title="Press Me"
        onPress={startAnimation}
        color={animatedColor}
      />
    </View>

  );
}
