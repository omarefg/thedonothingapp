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
import Svg, { Path } from 'react-native-svg';

import { interpolate } from 'flubber';

const startPath = 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';
const endPath = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// eslint-disable-next-line max-len
export function UnderstandingHowAnimatedWorksUsingFlubberAndAnimatedForBetterSVGPathMorphing(): React$Node {
  const animation = useMemo(() => new Animated.Value(0), []);
  const pathRef = useRef();

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.delay(1500),
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    const pathInterpolate = interpolate(startPath, endPath, {
      maxSegmentLength: 1,
    });

    animation.addListener(({ value }) => {
      const path = pathInterpolate(value);
      pathRef?.current?.setNativeProps({
        d: path,
      });
    });
  }, [animation]);

  return (
    <View style={styles.container}>
      <Pressable onPress={startAnimation}>
        <Svg width={150} height={150}>
          <Path scale={3} d={startPath} stroke="black" ref={pathRef} />
        </Svg>

      </Pressable>
    </View>
  );
}
