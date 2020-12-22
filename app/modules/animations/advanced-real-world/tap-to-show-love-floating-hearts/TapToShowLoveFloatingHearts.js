/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @flow
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Animated,
} from 'react-native';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heart: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#6427d1',
  },
  leftHeart: {
    transform: [{ rotate: '-45deg' }],
    left: 5,
  },
  rightHeart: {
    transform: [{ rotate: '45deg' }],
    right: 5,
  },
});

type HeartProps = {
  style: any
}

const Heart = ({ style }: HeartProps) => (
  <Animated.View style={[styles.heart, style]}>
    <View style={[styles.heartShape, styles.leftHeart]} />
    <View style={[styles.heartShape, styles.rightHeart]} />
  </Animated.View>
);

export function AdvancedRealWorldTapToShowLoveFloatingHearts(): React$Node {
  const [hearts, setHearts] = useState([]);
  const [heartsUpdates, setHearstsUpdates] = useState({ updates: 0, animation: null });
  const { width, height } = useWindowDimensions();

  const handleAddHeart = () => {
    const animation = new Animated.Value(0);
    setHearts((prevState) => [...prevState, { animation, start: getRandomInt(100, width - 100) }]);
    setHearstsUpdates((prevState) => ({ updates: prevState.updates + 1, animation }));
  };

  useEffect(() => {
    if (heartsUpdates.animation) {
      Animated.timing(heartsUpdates.animation, {
        toValue: height,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    }
  }, [heartsUpdates.updates]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleAddHeart}>
        <View style={StyleSheet.absoluteFill}>
          {hearts.map(({ animation, start }, index) => {
            const dividedHeight = height / 6;

            const positionInterpolate = animation.interpolate({
              inputRange: [0, height],
              outputRange: [height - 50, 0],
            });

            const opacityInterpolate = animation.interpolate({
              inputRange: [0, height - 200],
              outputRange: [1, 0],
            });

            const scaleInterpolate = animation.interpolate({
              inputRange: [0, 15, 30],
              outputRange: [0, 1.2, 1],
              extrapolate: 'clamp',
            });

            const wobbleInterpolate = animation.interpolate({
              inputRange: [
                0,
                dividedHeight * 1,
                dividedHeight * 2,
                dividedHeight * 3,
                dividedHeight * 4,
                dividedHeight * 5,
                dividedHeight * 6,
              ],
              outputRange: [0, 15, -15, 15, -15, 15, -15],
              extrapolate: 'clamp',
            });

            const heartStyle = {
              left: start,
              transform: [
                { translateY: positionInterpolate },
                { translateX: wobbleInterpolate },
                { scale: scaleInterpolate },
              ],
              opacity: opacityInterpolate,
            };

            return <Heart key={index} style={heartStyle} />;
          })}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
