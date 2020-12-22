/* eslint-disable react/jsx-props-no-spreading */
/**
 * @flow
 */
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

type HeartProps = {
  filled: boolean,
  style: any,
  ...any
}

const styles = StyleSheet.create({
  heart: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
  },
  heartShape: {
    width: 30,
    height: 45,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  filledHeart: {
    backgroundColor: '#e31745',
  },
  fit: {
    transform: [
      { scale: 0.9 },
    ],
  },
  emptyFill: {
    backgroundColor: '#FFF',
  },
  empty: {
    backgroundColor: '#ccc',
  },
  leftHeart: {
    transform: [
      { rotate: '-45deg' },
    ],
    left: 5,
  },
  rightHeart: {
    transform: [
      { rotate: '45deg' },
    ],
    right: 5,
  },
});

const Heart = ({ filled, style, ...props }: HeartProps): React$Node => {
  const fillStyle = filled ? styles.filledHeart : styles.empty;

  const CenterNonFilled = () => (
    <View style={[StyleSheet.absoluteFill, styles.fit]}>
      <View style={[styles.leftHeart, styles.heartShape, styles.emptyFill]} />
      <View style={[styles.rightHeart, styles.heartShape, styles.emptyFill]} />
    </View>
  );

  return (
    <Animated.View {...props} style={[styles.heart, style]}>
      <View style={[styles.leftHeart, styles.heartShape, fillStyle]} />
      <View style={[styles.rightHeart, styles.heartShape, fillStyle]} />
      {!filled && <CenterNonFilled />}
    </Animated.View>
  );
};

export default Heart;
