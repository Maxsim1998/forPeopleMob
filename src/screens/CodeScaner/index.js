import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { BarCodeScanner } from 'expo-barcode-scanner';
// navigation
import { ROUTES_NAMES } from '../../navigation';
// styles
import { styles } from './styles';

export const CodeScaner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const { showActionSheetWithOptions } = useActionSheet();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    const options = ['Mark as sold', 'Add', 'Cancel'];
    // const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        // destructiveButtonIndex,
      },
      (buttonIndex) => {
        navigation.navigate(ROUTES_NAMES.ADD_ITEM, {
          codeData: {
            code: data,
            codeType: type,
          },
        });
      }
    );
    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {/* {scanned && (
        <Button title={'Tap Scan'} onPress={() => setScanned(false)} />
      )} */}
    </View>
  );
};
