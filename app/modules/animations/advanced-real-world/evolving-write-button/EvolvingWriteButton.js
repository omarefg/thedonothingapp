/**
 * @flow
 */

import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  useWindowDimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ICON_COLOR = '#fff';
const ICON_SIZE = 25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
  },
  editor: {
    borderWidth: 1,
    borderColor: 'rgba(0,0, 0, .1)',
  },
  bar: {
    backgroundColor: '#2979FF',
    height: 50,
    justifyContent: 'center',
  },
  toolbar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  rightInnerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  lowerView: {
    height: 150,
    overflow: 'hidden',
  },
  input: {
    padding: 10,
    fontSize: 20,
  },
  close: {
    color: '#2979FF',
    marginTop: 10,
    marginBottom: 20,
  },
});

export function AdvancedRealWorldEvolvingWriteButton(): React$Node {
  const animation = useMemo(() => new Animated.Value(0), []);
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  const input = useRef();

  const toggleTransform = () => setOpen((prevState) => !prevState);

  const widthInterpolate = animation.interpolate({
    inputRange: [0, 0.5],
    outputRange: [100, width - 40],
    extrapolate: 'clamp',
  });

  const opacityToolbarInterpolate = animation.interpolate({
    inputRange: [0, 0.5],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const toolbarStyles = {
    opacity: opacityToolbarInterpolate,
  };

  const editorHeightInputInterpolate = animation.interpolate({
    inputRange: [0.7, 1],
    outputRange: [0, 150],
    extrapolate: 'clamp',
  });

  const editorStyle = {
    opacity: animation,
    height: editorHeightInputInterpolate,
  };

  const opacityButtonInterpolate = animation.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const buttonStyles = {
    opacity: opacityButtonInterpolate,
  };

  useEffect(() => {
    const toValue = open ? 1 : 0;
    Animated.timing(animation, {
      toValue,
      duration: 550,
      useNativeDriver: false,
    }).start(() => {
      if (open) {
        input.current?.focus();
      } else {
        input.current?.blur();
      }
    });
  }, [open, animation]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.center} behavior="padding">
        <Animated.View style={[styles.editor, { width: widthInterpolate }]}>
          <Animated.View style={styles.bar}>
            <Animated.View style={[styles.toolbar, toolbarStyles]}>
              <Icon name="format-bold" color={ICON_COLOR} size={ICON_SIZE} />
              <Icon name="format-italic" color={ICON_COLOR} size={ICON_SIZE} />
              <Icon name="format-underline" color={ICON_COLOR} size={ICON_SIZE} />
              <Icon name="format-list-bulleted" color={ICON_COLOR} size={ICON_SIZE} />
              <View style={styles.rightInnerBar}>
                <Icon name="link" color={ICON_COLOR} size={ICON_SIZE} />
                <Icon name="image" color={ICON_COLOR} size={ICON_SIZE} />
                <Icon name="arrow-down-bold-box" color={ICON_COLOR} size={ICON_SIZE} />
              </View>
            </Animated.View>
            <Animated.View
              style={[StyleSheet.absoluteFill, styles.center, buttonStyles]}
              pointerEvents={open ? 'none' : 'auto'}
            >
              <TouchableWithoutFeedback onPress={toggleTransform}>
                <View>
                  <Text style={styles.buttonText}>Write</Text>
                </View>
              </TouchableWithoutFeedback>
            </Animated.View>
          </Animated.View>
          <Animated.View style={[styles.lowerView, editorStyle]}>
            <TextInput
              placeholder="Start writing..."
              style={[StyleSheet.absoluteFill, styles.input]}
              multiline
              ref={input}
            />
          </Animated.View>
        </Animated.View>
        <TouchableWithoutFeedback onPress={toggleTransform}>
          <Animated.View style={toolbarStyles}>
            <Text style={styles.close}>Close</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
