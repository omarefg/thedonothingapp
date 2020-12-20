/**
 * @flow
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: 'rgba(0,0,0,.2)',
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 20,
    right: 20,
    borderRadius: 30,
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  other: {
    backgroundColor: '#FFF',
  },
  payText: {
    color: '#FFF',
  },
  pay: {
    backgroundColor: '#00B15E',
  },
  label: {
    color: '#FFF',
    position: 'absolute',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
});

export function AdvancedRealWorldFloatingActionButtonWithMenu(): React$Node {
  const [open, setOpen] = useState(false);
  const animation = useMemo(() => new Animated.Value(0), []);

  const toggleOpen = () => setOpen((prevState) => !prevState);

  const scaleInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 15],
  });

  const bgStyle = {
    transform: [
      {
        scale: scaleInterpolate,
      },
    ],
  };

  const reloadInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -70],
  });

  const orderInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -140],
  });

  const reloadStyle = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: reloadInterpolate,
      },
    ],
  };

  const orderStyle = {
    transform: [
      {
        scale: animation,
      },
      {
        translateY: orderInterpolate,
      },
    ],
  };

  const labelPositionInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-30, -90],
  });

  const opacityInterpolate = animation.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 0, 1],
  });

  const labelStyle = {
    opacity: opacityInterpolate,
    transform: [
      {
        translateX: labelPositionInterpolate,
      },
    ],
  };

  useEffect(() => {
    const toValue = open ? 1 : 0;
    Animated.timing(animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [open, animation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, bgStyle]} />
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.other, orderStyle]}>
          <Animated.Text style={[styles.label, labelStyle]}>Order</Animated.Text>
          <Icon name="food-fork-drink" size={20} color="#555" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.other, reloadStyle]}>
          <Animated.Text style={[styles.label, labelStyle]}>Reload</Animated.Text>
          <Icon name="reload" size={20} color="#555" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleOpen}>
        <View style={[styles.button, styles.pay]}>
          <Animated.Text style={[styles.label, labelStyle]}>Pay</Animated.Text>
          <Text style={styles.payText}>$5.00</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>

  );
}
