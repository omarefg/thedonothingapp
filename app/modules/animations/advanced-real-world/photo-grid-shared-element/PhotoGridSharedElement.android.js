/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
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
  Image,
  Animated,
  ScrollView,
  Pressable,
} from 'react-native';

import images from './assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridImage: {
    width: '100%',
    height: 150,
  },
  gridImageContainer: {
    width: '33.33%',
    height: 150,
  },
  topContent: {
    flex: 1,
  },
  content: {
    flex: 2,
    backgroundColor: '#fff',
  },
  viewImage: {
    width: null,
    height: null,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeText: {
    backgroundColor: 'transparent',
    fontSize: 28,
    color: '#fff',
  },
});

export function AdvancedRealWorldPhotoGridSharedElement(): React$Node {
  const gridImages = useMemo(() => ({}), []);
  const viewImage = useRef();
  const [activeImage, setActiveImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const size = useMemo(() => new Animated.ValueXY(), []);
  const position = useMemo(() => new Animated.ValueXY(), []);
  const animation = useMemo(() => new Animated.Value(0), []);
  const measures = useMemo(() => ({}), []);

  const handleOpenImage = (index) => () => {
    if (gridImages[index]) {
      gridImages[index].measure((x, y, width, height, pageX, pageY) => {
        measures.x = pageX;
        measures.y = pageY - 55;
        measures.width = width;
        measures.height = height;

        position.setValue({ x: pageX, y: pageY });
        size.setValue({ x: width, y: height });

        setActiveImage(images[index]);
        setActiveIndex(index);
      });
    }
  };

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(position.x, { toValue: measures.x, duration: 250, useNativeDriver: false }),
      Animated.timing(position.y, { toValue: measures.y, duration: 250, useNativeDriver: false }),
      Animated.timing(size.x, { toValue: measures.width, duration: 250, useNativeDriver: false }),
      Animated.timing(size.y, { toValue: measures.height, duration: 250, useNativeDriver: false }),
      Animated.timing(animation, { toValue: 0, duration: 250, useNativeDriver: true }),
    ]).start(() => {
      setActiveImage(null);
    });
  };

  const animatedContentTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const animatedContentStyles = {
    opacity: animation,
    transform: [
      {
        translateY: animatedContentTranslate,
      },
    ],
  };

  const activeImageStyle = {
    width: size.x,
    height: size.y,
    top: position.y,
    left: position.x,
  };

  const activeIndexStyle = {
    opacity: activeImage ? 0 : 1,
  };

  const animatedCloseStyles = {
    opacity: animation,
  };

  useEffect(() => {
    if (typeof activeIndex === 'number') {
      viewImage.current?.measure((tX, tY, tWidth, tHeight, tPageX, tPageY) => {
        Animated.parallel([
          Animated.spring(position.x, { toValue: tPageX, useNativeDriver: false }),
          Animated.spring(position.y, { toValue: tPageY - 55, useNativeDriver: false }),
          Animated.spring(size.x, { toValue: tWidth, useNativeDriver: false }),
          Animated.spring(size.y, { toValue: tHeight, useNativeDriver: false }),
          Animated.spring(animation, { toValue: 1, useNativeDriver: true }),
        ]).start();
      });
    }
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.grid}>
          {images.map((src, index) => {
            const style = index === activeIndex ? activeIndexStyle : undefined;
            return (
              <Pressable
                key={index}
                style={[styles.gridImageContainer]}
                onPress={handleOpenImage(index)}
              >
                <Image
                  source={src}
                  resizeMode="cover"
                  style={[styles.gridImage, style]}
                  ref={(image) => { gridImages[index] = image; }}
                />
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
      <View
        style={StyleSheet.absoluteFill}
        pointerEvents={activeImage ? 'auto' : 'none'}
      >
        <View
          style={styles.topContent}
          ref={viewImage}
          onLayout={() => {}}
        >
          <Animated.Image
            key={activeImage}
            source={activeImage}
            resizeMode="cover"
            style={[styles.viewImage, activeImageStyle]}
          />
        </View>
        <Animated.View
          style={[styles.content, animatedContentStyles]}
        >
          <Text style={styles.title}>Pretty Image from Unsplash</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis interdum
            porttitor. Nam lorem justo, aliquam id feugiat quis, malesuada sit amet massa. Sed
            fringilla lorem sit amet metus convallis, et vulputate mauris convallis. Donec
            venenatis tincidunt elit, sed molestie massa. Fusce scelerisque nulla vitae mollis
            lobortis. Ut bibendum risus ac rutrum lacinia. Proin vel viverra tellus, et venenatis
            massa. Maecenas ac gravida purus, in porttitor nulla. Integer vitae dui tincidunt,
            blandit felis eu, fermentum lorem. Mauris condimentum, lorem id convallis fringilla,
            purus orci viverra metus, eget finibus neque turpis sed turpis.
          </Text>
        </Animated.View>
        <Animated.View style={[styles.close, animatedCloseStyles]}>
          <Pressable onPress={handleClose}>
            <Text style={styles.closeText}>X</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}
