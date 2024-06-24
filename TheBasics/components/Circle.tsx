import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

const Circle = ({ onPress, position }) => {
  return (
    <Pressable onPress={onPress} style={[styles.circle, position]}>
      <View />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'orange',
    position: 'absolute',
  },
});

export default Circle;