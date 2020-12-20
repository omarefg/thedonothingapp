/* eslint-disable react/jsx-props-no-spreading */
/**
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
  TextInput,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  modal: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  comments: {
    flex: 1,
  },
  fakeText: {
    padding: 15,
    textAlign: 'center',
  },
  fakeComments: {
    height: 1000,
    backgroundColor: '#f1f1f1',
  },
  inputWrap: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  textInput: {
    flex: 1,
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
});

export function AdvancedRealWorldCreateASocialCommentModalWithAnimatedSwipeAway(): React$Node {
  const animated = new Animated.Value(0);
  const animatedMargin = new Animated.Value(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      const { dy } = gestureState;
      const totalScrollHeight = scrollOffset + scrollViewHeight;
      if ((scrollOffset <= 0 && dy > 0) || ((totalScrollHeight >= contentHeight) && dy < 0)) {
        return true;
      }
      return false;
    },
    onPanResponderMove: (e, gestureState) => {
      const { dy } = gestureState;
      if (dy < 0) {
        animated.setValue(dy);
      } else if (dy > 0) {
        animatedMargin.setValue(dy);
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      const { dy } = gestureState;
      if (dy < -150) {
        Animated.parallel([
          Animated.timing(animated, {
            toValue: -400,
            duration: 150,
            useNativeDriver: false,
          }),
          Animated.timing(animatedMargin, {
            toValue: 0,
            duration: 150,
            useNativeDriver: false,
          }),
        ]).start();
      } else if (dy > -150 && dy < 150) {
        Animated.parallel([
          Animated.timing(animated, {
            toValue: 0,
            duration: 150,
            useNativeDriver: false,
          }),
          Animated.timing(animatedMargin, {
            toValue: 0,
            duration: 150,
            useNativeDriver: false,
          }),
        ]).start();
      } else if (dy > 150) {
        Animated.timing(animated, {
          toValue: 400,
          duration: 300,
          useNativeDriver: false,
        }).start();
      }
    },
  });
  const spacerStyle = {
    marginTop: animatedMargin,
  };
  const opacityInterpolate = animated.interpolate({
    inputRange: [-400, 0, 400],
    outputRange: [0, 1, 0],
  });
  const modalStyle = {
    transform: [{ translateY: animated }],
    opacity: opacityInterpolate,
  };

  const handleOnScroll = (event) => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
    setScrollViewHeight(event.nativeEvent.layoutMeasurement.height);
  };

  const handleOnContentSizeChange = (contentWidth, heigh) => setContentHeight(heigh);

  return (
    <View style={styles.container}>
      <Animated.View style={spacerStyle} />
      <Animated.View
        style={[styles.modal, modalStyle]}
        {...panResponder.panHandlers}
      >
        <View style={styles.comments}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={handleOnScroll}
            onContentSizeChange={handleOnContentSizeChange}
          >
            <Text style={styles.fakeText}>Top</Text>
            <View style={styles.fakeComments} />
            <Text style={styles.fakeText}>Bottom</Text>
          </ScrollView>
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.textInput}
            placeholder="Comment"
          />
        </View>
      </Animated.View>
    </View>
  );
}
