/**
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from 'react-native';

const useStyles = ({ width, height }) => StyleSheet.create({
  container: {
    width,
    height,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  center: {
    justifyContent: 'center',
  },
  textWrap: {
    backgroundColor: 'rgba(0,0,0,.5)',
    paddingVertical: 10,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
  },
});

type Props = {
  translateX: number,
  title: string,
  image: number
}

function Moment(props: Props): React$Node {
  const { translateX, title, image } = props;
  const styles = useStyles(useWindowDimensions());
  const animatedStyle = { transform: [{ translateX }] };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={image}
        style={[styles.image, animatedStyle]}
        resizeMode="cover"
      />
      <View style={[StyleSheet.absoluteFill, styles.center]}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

export default Moment;
