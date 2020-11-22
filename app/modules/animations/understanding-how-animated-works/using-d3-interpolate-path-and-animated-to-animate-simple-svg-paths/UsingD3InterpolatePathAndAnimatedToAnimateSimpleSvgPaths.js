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
import { interpolatePath } from 'd3-interpolate-path';

const startPath = 'M45,50a5,5 0 1,0 10,0a5,5 0 1,0 -10,0';
const endPath = 'M20,50a30,30 0 1,0 60,0a30,30 0 1,0 -60,0';

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

// eslint-disable-next-line max-len
export function UnderstandingHowAnimatedWorksUsingD3InterpolatePathAndAnimatedToAnimateSimpleSVGPaths(): React$Node {
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
    const pathInterpolate = interpolatePath(startPath, endPath);

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
          <Path d={startPath} stroke="black" ref={pathRef} />
        </Svg>
      </Pressable>
    </View>
  );
}
