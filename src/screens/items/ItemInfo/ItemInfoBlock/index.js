import React from 'react';
import T from 'prop-types';
import { Text, View } from 'react-native';
// styles
import { styles } from './styles';

const ItemInfoBlock = ({ infoKey, infoValue }) => (
  <View style={styles.infoBlock}>
    <Text style={styles.key}>{infoKey}:</Text>
    <Text style={styles.value}>{infoValue}</Text>
  </View>
);

ItemInfoBlock.propTypes = {
  infoKey: T.string.isRequired,
  infoValue: T.string.isRequired,
};

export default ItemInfoBlock;
