/**
 * @flow
 */

import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { Heart } from '../../../../components';

const getTransformationAnimation = (animation, scale, y, x, rotate, opacity) => {
  const scaleAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, scale],
  });

  const xAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, x],
  });

  const yAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, y],
  });

  const rotateAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', rotate],
  });

  const opacityAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, opacity],
  });

  return {
    opacity: opacityAnimation,
    transform: [
      { scale: scaleAnimation },
      { translateX: xAnimation },
      { translateY: yAnimation },
      { rotate: rotateAnimation },
    ],
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heart: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export function AdvancedRealWorldExplodingHeartButton(): React$Node {
  const [liked, setLiked] = useState(false);
  const scale = useMemo(() => new Animated.Value(0), []);
  const animations = useMemo(() => [
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ], []);

  const triggerLike = () => {
    setLiked((prevState) => {
      if (!prevState) {
        const showAnimations = animations.map((animation) => Animated.spring(animation, {
          toValue: 1,
          friction: 4,
          useNativeDriver: false,
        }));

        const hideAnimations = animations.map((animation) => Animated.timing(animation, {
          toValue: 0,
          duration: 50,
          useNativeDriver: false,
        })).reverse();

        Animated.parallel([
          Animated.spring(scale, {
            toValue: 2,
            friction: 3,
            useNativeDriver: false,
          }),
          Animated.sequence([
            Animated.stagger(50, showAnimations),
            Animated.delay(100),
            Animated.stagger(50, hideAnimations),
          ]),
        ]).start(() => {
          scale.setValue(0);
        });
      }
      return !prevState;
    });
  };

  const bouncyHeart = scale.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0.8, 1],
  });

  const heartButtonStyle = {
    transform: [
      { scale: bouncyHeart },
    ],
  };

  return (
    <View style={styles.container}>
      <View>
        <Heart filled style={[styles.heart, getTransformationAnimation(animations[5], 0.4, -280, 0, '10deg', 0.7)]} />
        <Heart filled style={[styles.heart, getTransformationAnimation(animations[4], 0.7, -120, 40, '45deg', 0.5)]} />
        <Heart filled style={[styles.heart, getTransformationAnimation(animations[3], 0.8, -120, -40, '-45deg', 0.3)]} />
        <Heart filled style={[styles.heart, getTransformationAnimation(animations[2], 0.3, -150, 120, '-35deg', 0.6)]} />
        <Heart filled style={[styles.heart, getTransformationAnimation(animations[1], 0.3, -120, -120, '-35deg', 0.7)]} />
        <Heart filled style={[styles.heart, getTransformationAnimation(animations[0], 0.8, -60, 0, '35deg', 0.8)]} />
        <TouchableWithoutFeedback onPress={triggerLike}>
          <Animated.View style={heartButtonStyle}>
            <Heart filled={liked} />
          </Animated.View>
        </TouchableWithoutFeedback>

      </View>
    </View>
  );
}
