import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Skeleton = (props) => {
  const { width, height, style, show, children } = props;
  const [showSkeleton, setShowSkeleton] = useState(true);
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [width]);

  useEffect(() => {
    if (show) {
      setShowSkeleton(true);
    } else {
      setTimeout(() => {
        setShowSkeleton(false);
        Animated.timing(translateX).stop();
      }, 1500);
    }
  }, [show]);

  return (
    <>
      <View
        style={StyleSheet.flatten([
          {
            width,
            height,
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            overflow: "hidden",
          },
          style,
        ])}
      >
        {showSkeleton && (
          <Animated.View
            style={{
              width: "100%",
              height: "100%",
              transform: [{ translateX: translateX }],
            }}
          >
            <LinearGradient
              style={{ width: "100%", height: "100%" }}
              colors={["transparent", "rgba(0, 0, 0, 0.05)", "transparent"]}
              start={{ x: 1, y: 1 }}
            />
          </Animated.View>
        )}
        {children}
      </View>
    </>
  );
};

export default Skeleton;
