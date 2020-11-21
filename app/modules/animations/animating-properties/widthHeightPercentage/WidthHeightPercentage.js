/**
 * @flow
 */

import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'tomato',
  },
});

export function AnimatingPropertiesWidthHeightPercentage(): React$Node {
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

  const widthInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '50%'],
  });

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '30%'],
  });

  const animatedStyles = {
    width: widthInterpolate,
    height: heightInterpolate,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={startAnimation}
      >
        <Animated.View
          style={[styles.box, animatedStyles]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
