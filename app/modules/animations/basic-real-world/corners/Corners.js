/**
 * @flow
 */

import React from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
    position: 'absolute',
    top: -75,
    left: 0,
  },
});

export function BasicRealWorldCorners(): React$Node {
  const animation = new Animated.ValueXY();
  const dimensions = { width: 0, height: 0 };
  const startAnimation = () => {
    const { width, height } = Dimensions.get('window');

    Animated.sequence([
      Animated.spring(animation.y, {
        toValue: height - dimensions.height,
        useNativeDriver: false,
      }),
      Animated.spring(animation.x, {
        toValue: width - dimensions.width,
        useNativeDriver: false,
      }),
      Animated.spring(animation.y, {
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.spring(animation.x, {
        toValue: 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const saveDimensions = (event) => {
    dimensions.width = event.nativeEvent.layout.width;
    dimensions.height = event.nativeEvent.layout.height;
  };

  const animatedStyles = {
    transform: animation.getTranslateTransform(),
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={startAnimation}
      >
        <Animated.View
          style={[styles.box, animatedStyles]}
          onLayout={saveDimensions}
        />
      </Pressable>
    </View>
  );
}
