/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @flow
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7B73',
  },
  buttonWrap: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifyText: {
    color: '#FF7B73',
    fontWeight: 'bold',
  },
  inputWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  textInput: {
    flex: 4,
  },
  sendButton: {
    backgroundColor: '#FF7B73',
    flex: 1,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    color: '#FFF',
  },
});

export function AdvancedRealWorldExpandingNotifyInputWithSuccessMessage(): React$Node {
  const animate = useMemo(() => new Animated.Value(0), []);
  const [success, setSuccess] = useState(false);

  const handlePress = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleSend = () => setSuccess(true);

  const widthInterpolate = animate.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [150, 150, 300],
    extrapolate: 'clamp',
  });

  const notifyTextScaleInterpolate = animate.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const inputScaleInterpolate = animate.interpolate({
    inputRange: [0, 0.5, 0.6],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const sendButtonInterpolate = animate.interpolate({
    inputRange: [0, 0.6, 1],
    outputRange: [0, 0, 1],
  });

  const thankyouScaleInterpolate = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const buttonWrapStyle = {
    width: widthInterpolate,
  };

  const notifyTextStyle = {
    transform: [{
      scale: notifyTextScaleInterpolate,
    }],
  };

  const thankyouTextStyle = {
    transform: [{
      scale: thankyouScaleInterpolate,
    }],
  };

  const inputWrapStyle = {
    transform: [{
      scale: inputScaleInterpolate,
    }],
  };

  const sendButtonStyle = {
    transform: [{
      scale: sendButtonInterpolate,
    }],
  };

  useEffect(() => {
    if (success) {
      Animated.sequence([
        Animated.timing(animate, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.delay(1500),
      ]).start(() => setSuccess(false));
    }
  }, [success]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={[styles.buttonWrap, buttonWrapStyle]}>
          {!success && (
            <Animated.View style={[StyleSheet.absoluteFill, styles.inputWrap, inputWrapStyle]}>
              <TextInput
                autoFocus
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor="rgba(255,123,115, 0.8)"
                style={styles.textInput}
              />
              <AnimatedTouchableOpacity
                style={[styles.sendButton, sendButtonStyle]}
                onPress={handleSend}
              >
                <Text style={styles.sendText}>Send</Text>
              </AnimatedTouchableOpacity>
            </Animated.View>
          )}

          {!success && (
            <Animated.View style={notifyTextStyle}>
              <Text style={styles.notifyText}>Notify Me</Text>
            </Animated.View>
          )}
          {success && (
            <Animated.View style={thankyouTextStyle}>
              <Text style={styles.notifyText}>Thank You</Text>
            </Animated.View>
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
