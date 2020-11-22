/**
 * @flow
 */

import React, { useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  scroll: {
    flex: 1,
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  fakeContent: {
    height: 3000,
    backgroundColor: 'tomato',
  },

});

export function UnderstandingHowAnimatedWorksUsingAndUnderstandingSetNativeProps(): React$Node {
  const animation = new Animated.Value(0);
  let enabled = true;
  const scroll = useRef();

  const startAnimation = () => {
    enabled = !enabled;
    const style = [styles.scroll];

    if (!enabled) {
      style.push(styles.hide);
    } else {
      style.push(styles.show);
    }

    scroll?.current?.setNativeProps({
      scrollEnabled: enabled,
      style,
    });
  };

  const bgInterpolate = animation.interpolate({
    inputRange: [0, 3000],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
  });
  const scrollStyle = {
    backgroundColor: bgInterpolate,
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={startAnimation}>
        <Text>Toggle</Text>
      </Pressable>

      <ScrollView
        style={styles.scroll}
        ref={scroll}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animation,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}
      >
        <Animated.View style={[styles.fakeContent, scrollStyle]} />
      </ScrollView>
    </View>

  );
}
