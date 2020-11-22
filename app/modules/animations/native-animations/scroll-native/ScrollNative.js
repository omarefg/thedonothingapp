/**
 * @flow
 */

import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 3000,
  },

});

export function NativeAnimationsScrollNative(): React$Node {
  const animation = new Animated.Value(0);

  const opacityInterpolate = animation.interpolate({
    inputRange: [0, 3000],
    outputRange: [1, 0],
  });

  const backgroundStyle = {
    backgroundColor: 'tomato',
    opacity: opacityInterpolate,
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animation,
                },
              },
            },
          ],
          { useNativeDriver: true },
        )}
      >
        <Animated.View style={[styles.content, backgroundStyle]} />
      </Animated.ScrollView>
    </View>
  );
}
