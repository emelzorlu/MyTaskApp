import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Add} from 'iconsax-react-native';

const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="32" color="#ffffff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8A65',
    width: 70,
    height: 70,
    borderRadius: 1000,
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
});

export default FloatActionButton;