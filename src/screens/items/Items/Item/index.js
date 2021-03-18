import React from 'react';
import T from 'prop-types';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
// styles
import { styles } from './styles';
// navigation
import { ROUTES_NAMES } from '../../../../navigation';
// types
import { ItemShape } from '../../../../types';

const Item = ({ item, navigation }) => {
  if (item.isArchived) return null;
  const onPress = () =>
    navigation.navigate(ROUTES_NAMES.ITEM_INFO, {
      item,
    });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Description: {item.description}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

Item.propTypes = {
  item: T.shape(ItemShape),
  navigation: T.object.isRequired,
};

export default Item;
