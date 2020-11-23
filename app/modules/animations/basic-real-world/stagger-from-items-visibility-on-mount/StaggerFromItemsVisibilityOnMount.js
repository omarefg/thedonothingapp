/**
 * @flow
 */

import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Animated,
  Pressable,
  Keyboard,
  ActivityIndicator,
} from 'react-native';

import background from './assets/background.jpg';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const createAnimationStyle = (animation) => {
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-5, 0],
  });

  return {
    opacity: animation,
    transform: [
      {
        translateY,
      },
    ],
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#FFF',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 10,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.25)',
    paddingVertical: 30,
  },
  input: {
    width: 250,
    height: 35,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFF',
    color: '#333',
    backgroundColor: '#FFF',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },
});

export function BasicRealWorldStaggerFromItemsVisibilityOnMount(): React$Node {
  const [backgroundImageIsLoaded, setBackgroundImageIsLoaded] = useState<boolean>(false);
  const email = useMemo(() => new Animated.Value(0), []);
  const password = useMemo(() => new Animated.Value(0), []);
  const button = useMemo(() => new Animated.Value(0), []);
  const emailRef = useRef();

  useEffect(() => {
    if (backgroundImageIsLoaded) {
      Animated.stagger(100, [
        Animated.timing(email, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(password, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(button, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start(() => {
        emailRef?.current?.focus();
      });
    }
  }, [email, password, button, backgroundImageIsLoaded]);

  const emailStyle = createAnimationStyle(email);
  const passwordStyle = createAnimationStyle(password);
  const buttonStyle = createAnimationStyle(button);

  return (
    <Pressable
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={[StyleSheet.absoluteFill, { width: null, height: null }]}
        onLoad={() => setBackgroundImageIsLoaded(true)}
      >
        {backgroundImageIsLoaded ? (
          <View style={styles.form}>
            <View style={styles.container}>
              <Text style={styles.title}>Login</Text>
              <AnimatedTextInput
                ref={emailRef}
                style={[styles.input, emailStyle]}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="#333"
              />
              <AnimatedTextInput
                placeholder="Password"
                style={[styles.input, passwordStyle]}
                secureTextEntry
                placeholderTextColor="#333"
              />
              <TouchableOpacity>
                <Animated.View style={[styles.button, buttonStyle]}>
                  <Text style={styles.buttonText}>Login</Text>
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
        )
          : (
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <ActivityIndicator size="large" />
            </View>
          )}
      </ImageBackground>
    </Pressable>
  );
}
