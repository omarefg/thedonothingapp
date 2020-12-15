/**
 * @flow
 */

import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TextInput,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const iconColor = '#555';
const iconSize = 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 50,
  },
  rowWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '55%',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowOffset: { x: 2, y: 2 },
    shadowRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 3,
  },
  colorBall: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  colorRowWrap: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 5,
  },
  input: {
    flex: 1,
    height: 30,
    paddingVertical: 5,
  },
  okButton: {
    borderRadius: 20,
    width: 30,
    height: '100%',
    backgroundColor: '#309eeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  okText: {
    color: '#fff',
  },
});

const pressableBaseStyles = (pressableStyles = {}) => ({ pressed }) => ({
  opacity: pressed ? 0.4 : 1,
  ...pressableStyles,
});

export function AdvancedRealWorldAnimatedColorPicker(): React$Node {
  const animation = useMemo(() => new Animated.Value(0), []);
  const buttonAnimation = useMemo(() => new Animated.Value(0), []);
  const [color, setColor] = useState('#000');
  const [open, setOpen] = useState(false);
  const [inputOpen, setInputOpen] = useState(false);
  const inputRef = useRef();
  const handleToggle = () => {
    const toValue = open ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      useNativeDriver: false,
    }).start();
    setOpen((prevState) => !prevState);
  };

  const toggleInput = () => {
    const toValue = inputOpen ? 0 : 1;
    Animated.timing(buttonAnimation, {
      toValue,
      useNativeDriver: false,
      duration: 350,
    }).start();
    setInputOpen((prevState) => !prevState);
  };

  const inputOpacity = buttonAnimation.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 0, 1],
  });

  const inputStyles = {
    opacity: inputOpacity,
  };

  const colorStyle = {
    backgroundColor: color,
  };

  const scaleX = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [150, 0],
  });

  const rowStyle = {
    opacity: animation,
    transform: [
      { scaleY: animation },
      { scaleX },
      { translateY },
    ],
  };

  const moveInterpolate = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-150, 0],
  });

  const buttonStyles = {
    transform: [
      { translateX: moveInterpolate },
      { scale: buttonAnimation },
    ],
  };

  const iconTranslate = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -20],
  });

  const iconOpacity = buttonAnimation.interpolate({
    inputRange: [0, 0.2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const iconStyle = {
    opacity: iconOpacity,
    transform: [
      { translateX: iconTranslate },
    ],
  };

  useEffect(() => {
    if (!inputOpen) {
      inputRef.current?.blur();
    } else {
      inputRef.current?.focus();
    }
  }, [inputOpen]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.rowWrap, rowStyle]}>
        <Pressable
          style={pressableBaseStyles()}
          onPress={toggleInput}
        >
          <Animated.View style={[styles.colorBall, colorStyle]} />
        </Pressable>
        <View style={styles.row}>
          <Pressable style={pressableBaseStyles()}>
            <AnimatedIcon name="bold" size={iconSize} color={iconColor} style={iconStyle} />
          </Pressable>
          <Pressable style={pressableBaseStyles()}>
            <AnimatedIcon name="italic" size={iconSize} color={iconColor} style={iconStyle} />
          </Pressable>
          <Pressable style={pressableBaseStyles()}>
            <AnimatedIcon name="align-center" size={iconSize} color={iconColor} style={iconStyle} />
          </Pressable>
          <Pressable style={pressableBaseStyles()}>
            <AnimatedIcon name="link" size={iconSize} color={iconColor} style={iconStyle} />
          </Pressable>
          <Animated.View
            style={[StyleSheet.absoluteFill, styles.colorRowWrap]}
            pointerEvents={inputOpen ? 'auto' : 'none'}
          >
            <AnimatedTextInput
              style={[styles.input, inputStyles]}
              value={color}
              onChangeText={setColor}
              ref={inputRef}
            />
            <Animated.View style={[buttonStyles]}>
              <Pressable style={styles.okButton} onPress={toggleInput}>
                <Text style={styles.okText}>Ok</Text>
              </Pressable>
            </Animated.View>
          </Animated.View>
        </View>
      </Animated.View>
      <Pressable
        onPress={handleToggle}
        style={pressableBaseStyles(styles.button)}
      >
        <Text>Toggle Open/Close</Text>
      </Pressable>
    </View>
  );
}
