/**
 * @flow
 */

import React from 'react';
import {
  Animated, PanResponder, StyleSheet, Text, View,
} from 'react-native';
import Picture from './assets/picture.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function BasicRealWorldStaggeredHeads(): React$Node {
  const heads = [
    {
      image: Picture,
      animation: new Animated.ValueXY(),
      id: '0',
    },
    {
      image: Picture,
      animation: new Animated.ValueXY(),
      id: '1',
    },
    {
      image: Picture,
      animation: new Animated.ValueXY(),
      id: '2',
    },
    {
      image: Picture,
      animation: new Animated.ValueXY(),
      id: '3',
    },
  ];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      heads.forEach(({ animation }) => {
        animation.extractOffset();
        animation.setValue({ y: 0, x: 0 });
      });
    },
    onPanResponderMove: (e, { dx, dy }) => {
      heads[0].animation.setValue({ x: dx, y: dy });
      heads.slice(1).forEach(({ animation }, index) => {
        Animated.sequence([
          Animated.delay(index * 10),
          Animated.spring(animation, {
            toValue: { x: dx, y: dy },
            useNativeDriver: false,
          }),
        ]).start();
      });
    },
  });

  return (
    <View style={styles.container}>
      {heads.slice(0).reverse().map((item, index, items) => {
        const pan = index === items.length - 1 ? panResponder.panHandlers : {};
        return (
          <Animated.Image
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...pan}
            key={item.id}
            source={item.image}
            style={[
              styles.head, {
                transform: item.animation.getTranslateTransform(),
              }]}
          />
        );
      })}
    </View>
  );
}
