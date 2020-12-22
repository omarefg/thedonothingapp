/**
 * @flow
 */

import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { Heart } from '../../../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function AdvancedRealWorldBouncingHeartShapedLikeButtonOnPress(): React$Node {
  const [liked, setLiked] = useState(false);
  const scale = useMemo(() => new Animated.Value(0), []);

  const triggerLike = () => {
    setLiked((prevState) => !prevState);
    Animated.spring(scale, {
      toValue: 2,
      friction: 3,
      useNativeDriver: false,
    }).start(() => {
      scale.setValue(0);
    });
  };

  const bouncyHeart = scale.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0.8, 1],
  });

  const heartButtonStyle = {
    transform: [
      { scale: bouncyHeart },
    ],
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableWithoutFeedback onPress={triggerLike}>
          <Animated.View style={heartButtonStyle}>
            <Heart filled={liked} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
