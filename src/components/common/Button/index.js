import React from 'react';
import T from 'prop-types';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
// styles
import { styles } from './styles';

export const Button = ({ onPress, text }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.wrap}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableWithoutFeedback>
);

Button.propTypes = {
  onPress: T.func.isRequired,
  text: T.string.isRequired,
};
