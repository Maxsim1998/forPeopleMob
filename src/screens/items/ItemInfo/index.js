import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
// components
import ItemInfoBlock from './ItemInfoBlock';
import { Button } from '../../../components';
// navigation
import { ROUTES_NAMES } from '../../../navigation';
// constants
import { INFO_KEYS } from './constants';
// styles
import { styles } from './styles';

export const ItemInfo = ({ route, navigation }) => {
  const { item } = route.params;
  const onEditPress = () => {
    navigation.navigate(ROUTES_NAMES.EDIT_ITEM);
  };
  return (
    <View style={styles.container}>
      <View>
        {INFO_KEYS.map((infoKey) => (
          <ItemInfoBlock
            key={infoKey}
            infoKey={infoKey}
            infoValue={item[infoKey]}
          />
        ))}
        <View style={styles.qrCodeWrap}>
          <Text style={styles.qrCodeTitle}>QRCode</Text>
          <QRCode value={item.code} size={200} />
        </View>
      </View>
      <Button onPress={onEditPress} text="Edit" />
    </View>
  );
};
