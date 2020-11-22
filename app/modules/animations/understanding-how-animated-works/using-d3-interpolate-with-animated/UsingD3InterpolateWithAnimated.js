/**
 * @flow
 */

import React, { useEffect, useMemo, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';
import { interpolateNumber, interpolateRgb } from 'd3-interpolate';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
  },
});

export function UnderstandingHowAnimatedWorksUsingD3InterpolateWithAnimated(): React$Node {
  const animation = useMemo(() => new Animated.Value(0), []);
  const viewRef = useRef();

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    const positionInterpolate = interpolateNumber(0, 200);
    const colorInterpolate = interpolateRgb('rgb(255,99,71)', 'rgb(99,71,255)');

    animation.addListener(({ value }) => {
      const position = positionInterpolate(value);
      const color = colorInterpolate(value);

      const style = [
        styles.box,
        {
          backgroundColor: color,
          transform: [
            { translateY: position },
          ],
        },
      ];
      viewRef?.current?.setNativeProps({ style });
    });
  }, [animation]);

  return (
    <View style={styles.container}>
      <Pressable onPress={startAnimation}>
        <View style={styles.box} ref={viewRef} />
      </Pressable>
    </View>
  );
}
