import React, { useState, useCallback } from 'react';
import T from 'prop-types';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const ItemForm = ({ onSave }) => {
  const [formData, onChangeFormData] = useState({
    name: '',
    description: '',
    // count: 1,
  });

  const onChangeInput = useCallback((inputName, value) => {
    onChangeFormData((prev) => ({
      ...prev,
      [inputName]: value,
    }));
  }, []);

  const onSavePress = useCallback(() => onSave(formData), [formData, onSave]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => onChangeInput('name', value)}
        value={formData.name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => onChangeInput('description', value)}
        value={formData.description}
        placeholder="Description"
      />
      {/* <TextInput
        style={styles.input}
        onChangeText={(value) => onChangeInput('count', Number(value))}
        value={formData.count}
        placeholder="Count"
        keyboardType="number-pad"
      /> */}
      <Button title="Add Item" onPress={onSavePress} />
    </View>
  );
};

ItemForm.propTypes = {
  onSave: T.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 30,
  },
});
