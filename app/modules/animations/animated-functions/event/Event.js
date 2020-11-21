/**
 * @flow
 */

import React from 'react';
import {
  Animated,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 3000,
  },

});

export function AnimatedFunctionsEvent(): React$Node {
  const animation = new Animated.Value(0);

  const backgroundInterpolate = animation.interpolate({
    inputRange: [0, 3000],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
  });

  const backgroundStyle = {
    backgroundColor: backgroundInterpolate,
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{
            nativeEvent: {
              contentOffset: {
                y: animation,
              },
            },
          },
          ],
          { useNativeDriver: false },
        )}
      >
        <Animated.View style={[styles.content, backgroundStyle]} />
      </ScrollView>

    </View>
  );
}
