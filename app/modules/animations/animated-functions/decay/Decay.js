/**
 * @flow
 */

import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  PanResponder,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
  },

});

export function AnimatedFunctionsDecay(): React$Node {
  const animation = new Animated.ValueXY(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      animation.extractOffset();
      animation.resetAnimation();
    },
    onPanResponderMove: Animated.event(
      [null, { dx: animation.x, dy: animation.y }],
      { useNativeDriver: false },
    ),
    onPanResponderRelease: (e, { vx, vy }) => {
      Animated.decay(animation, {
        velocity: { x: vx, y: vy },
        deceleration: 0.997,
        useNativeDriver: false,
      }).start();
    },
  });

  const animatedStyle = {
    transform: animation.getTranslateTransform(),
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, animatedStyle]}
        onMoveShouldSetResponder={panResponder.panHandlers.onMoveShouldSetResponder}
        onMoveShouldSetResponderCapture={panResponder.panHandlers.onMoveShouldSetResponderCapture}
        onResponderEnd={panResponder.panHandlers.onResponderEnd}
        onResponderGrant={panResponder.panHandlers.onResponderGrant}
        onResponderMove={panResponder.panHandlers.onResponderMove}
        onResponderReject={panResponder.panHandlers.onResponderReject}
        onResponderRelease={panResponder.panHandlers.onResponderRelease}
        onResponderStart={panResponder.panHandlers.onResponderStart}
        onResponderTerminate={panResponder.panHandlers.onResponderTerminate}
        onResponderTerminationRequest={panResponder.panHandlers.onResponderTerminationRequest}
        onStartShouldSetResponder={panResponder.panHandlers.onStartShouldSetResponder}
        onStartShouldSetResponderCapture={panResponder.panHandlers.onStartShouldSetResponderCapture}
      />
    </View>
  );
}
