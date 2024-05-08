import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Datepicker} from '@ui-kitten/components';

const CustomDatePicker = props => {
    const {onSelectDate}=props
  return (
    <Datepicker
      {...props}
      onSelect={nextDate => onSelectDate(nextDate)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default CustomDatePicker;