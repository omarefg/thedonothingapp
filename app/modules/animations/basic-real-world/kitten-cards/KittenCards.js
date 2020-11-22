/**
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import clamp from 'clamp';

import cat1 from './assets/cat1.jpg';
import cat2 from './assets/cat2.jpg';
import cat3 from './assets/cat3.jpg';
import cat4 from './assets/cat4.jpg';

const SWIPE_THRESHOLD = 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.3,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 5,
  },
  yupButton: {
    shadowColor: 'green',
    backgroundColor: 'green',
  },
  nopeButton: {
    shadowColor: 'red',
    backgroundColor: 'red',
  },
  card: {
    width: 300,
    height: 300,
    position: 'absolute',
    borderRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  image: {
    width: null,
    height: null,
    flex: 3,
    borderRadius: 2,
  },
  lowerText: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
  },
  yup: {
    borderColor: 'green',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    borderRadius: 5,
    top: 20,
    left: 20,
    backgroundColor: '#FFF',
  },
  yupText: {
    fontSize: 16,
    color: 'green',
  },
  nope: {
    borderColor: 'red',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    borderRadius: 5,
    right: 20,
    top: 20,
    backgroundColor: '#FFF',
  },
  nopeText: {
    fontSize: 16,
    color: 'red',
  },

});

export function BasicRealWorldKittenCards(): React$Node {
  const animation = new Animated.ValueXY();
  const opacityAnimation = new Animated.Value(1);
  const nextCardAnimation = new Animated.Value(0.9);
  const [cats, setCats] = useState([
    { id: 0, image: cat1, text: 'Sweet Cat' },
    { id: 1, image: cat2, text: 'Sweet Cat' },
    { id: 2, image: cat3, text: 'Sweet Cat' },
    { id: 3, image: cat4, text: 'Sweet Cat' },
  ]);

  const transitionNext = () => {
    Animated.parallel([
      Animated.timing(opacityAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.spring(nextCardAnimation, {
        toValue: 1,
        friction: 4,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setCats((prevState) => prevState.slice(1));
      nextCardAnimation.setValue(0.9);
      opacityAnimation.setValue(1);
      animation.setValue({ x: 0, y: 0 });
    });
  };

  const handleOnPanResponderMove = Animated.event(
    [
      null,
      { dx: animation.x, dy: animation.y },
    ],
    { useNativeDriver: false },
  );

  const handleOnPanResponderRelease = (event, { dx, vx, vy }) => {
    let velocity = null;

    if (vx >= 0) {
      velocity = clamp(vx, 3, 5);
    } else if (vx < 0) {
      velocity = clamp(vx, 3, 5) * -1;
    }

    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      Animated.decay(animation, {
        velocity: { x: velocity, y: vy },
        deceleration: 0.98,
        useNativeDriver: false,
      }).start(transitionNext);
    } else {
      Animated.spring(animation, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
        friction: 4,
      }).start();
    }
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: handleOnPanResponderMove,
    onPanResponderRelease: handleOnPanResponderRelease,
  });

  const rotate = animation.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-30deg', '0deg', '30deg'],
    extrapolate: 'clamp',
  });

  const opacity = animation.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [0.5, 1, 0.5],
    extrapolate: 'clamp',
  });

  const animatedCardStyles = {
    opacity: opacityAnimation,
    transform: [
      { rotate },
      ...animation.getTranslateTransform(),
    ],
  };

  const animatedImageStyles = {
    opacity,
  };

  const yesOpacity = animation.x.interpolate({ inputRange: [0, 150], outputRange: [0, 1] });
  const yesScale = animation.x.interpolate({
    inputRange: [0, 150],
    outputRange: [0.5, 1],
    extrapolate: 'clamp',
  });
  const animatedYupStyles = {
    transform: [{ scale: yesScale }, { rotate: '-30deg' }],
    opacity: yesOpacity,
  };

  const noOpacity = animation.x.interpolate({ inputRange: [-150, 0], outputRange: [1, 0] });
  const noScale = animation.x.interpolate({
    inputRange: [-150, 0],
    outputRange: [1, 0.5],
    extrapolate: 'clamp',
  });
  const animatedNopeStyles = {
    transform: [{ scale: noScale }, { rotate: '30deg' }],
    opacity: noOpacity,
  };

  const handleNo = () => {
    Animated.timing(animation.x, {
      toValue: (SWIPE_THRESHOLD * 4) * -1,
      useNativeDriver: false,
    }).start(transitionNext);
  };
  const handleYes = () => {
    Animated.timing(animation.x, {
      toValue: SWIPE_THRESHOLD * 4,
      useNativeDriver: false,
    }).start(transitionNext);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {cats.slice(0, 2).reverse().map(({ image, id, text }, index, items) => {
          const isLastItem = index === items.length - 1;
          const isSecondToLast = index === items.length - 2;

          const panHandlers = isLastItem ? panResponder.panHandlers : {};
          const cardStyles = isLastItem ? animatedCardStyles : undefined;
          const imageStyles = isLastItem ? animatedImageStyles : undefined;

          const nextCardStyles = isSecondToLast ? {
            transform: [{ scale: nextCardAnimation }],
          } : undefined;

          return (
            <Animated.View
              style={[styles.card, cardStyles, nextCardStyles]}
              key={id}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...panHandlers}
            >
              <Animated.Image
                source={image}
                resizeMode="cover"
                style={[styles.image, imageStyles]}
              />
              <View style={styles.lowerText}>
                <Text>{text}</Text>
              </View>
              {isLastItem
                  && (
                  <Animated.View style={[styles.nope, animatedNopeStyles]}>
                    <Text style={styles.nopeText}>Nope!</Text>
                  </Animated.View>
                  )}

              {isLastItem
                  && (
                  <Animated.View style={[styles.yup, animatedYupStyles]}>
                    <Text style={styles.yupText}>Yup!</Text>
                  </Animated.View>
                  )}

            </Animated.View>
          );
        })}
      </View>
      <View style={styles.buttonBar}>
        <TouchableOpacity
          onPress={handleNo}
          style={[styles.button, styles.nopeButton]}
        >
          <Text style={styles.nopeText}>NO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleYes}
          style={[styles.button, styles.yupButton]}
        >
          <Text>YES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
