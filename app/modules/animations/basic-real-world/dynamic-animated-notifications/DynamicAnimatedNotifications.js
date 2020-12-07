/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @flow
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  Animated, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notification: {
    position: 'absolute',
    paddingHorizontal: 7,
    paddingVertical: 15,
    left: 0,
    top: 0,
    right: 0,
    backgroundColor: 'tomato',
  },
  notificationText: {
    color: '#FFF',
  },
  button: {
    backgroundColor: 'tomato',
    padding: 15,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderColor: '#CCC',
  },
});

export function BasicRealWorldDynamicAnimatedNotifications(): React$Node {
  const [value, setValue] = useState('');
  const [notification, setNotification] = useState('');
  const animatedViewRef = useRef();
  const opacity = new Animated.Value(0);
  const offset = new Animated.Value(0);

  const handlePress = (val) => () => {
    if (val) {
      setValue('');
      setNotification(val);
    }
  };

  const showNotification = () => {
    if (notification) {
      animatedViewRef.current?.measure((x, y, width) => {
        offset.setValue(width * -1);
        Animated.sequence([
          Animated.parallel([
            Animated.timing(opacity, {
              toValue: 1,
              duration: 300,
              useNativeDriver: false,
            }),
            Animated.spring(offset, {
              toValue: 0,
              duration: 300,
              friction: 3,
              useNativeDriver: false,
            }),
          ]),
          Animated.delay(3000),
          Animated.parallel([
            Animated.timing(opacity, {
              toValue: 0,
              duration: 300,
              useNativeDriver: false,
            }),
            Animated.timing(offset, {
              toValue: width * -1,
              duration: 300,
              useNativeDriver: false,
            }),
          ]),
        ]).start();
      });
    }
  };

  useEffect(showNotification, [notification]);

  const notificationStyle = {
    opacity,
    transform: [
      {
        translateX: offset,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.notification, notificationStyle]}
        ref={animatedViewRef}
      >
        <Text style={styles.notificationText}>
          {notification}
        </Text>
      </Animated.View>

      <View>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(val) => setValue(val)}
        />
        <TouchableOpacity onPress={handlePress(value)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Show Notification</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
