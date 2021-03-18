import React from 'react';
import T from 'prop-types';
import { Text, Button, FlatList, SafeAreaView } from 'react-native';
import { useQuery } from '@apollo/client';
// gql
import { ITEMS_QUERY } from '../../../gql';
// components
import Item from './Item';
// navigation
import { ROUTES_NAMES } from '../../../navigation';
// styles
import { styles } from './styles';

export const Items = ({ navigation }) => {
  const { loading, error, data } = useQuery(ITEMS_QUERY);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  const renderItem = ({ item }) => <Item navigation={navigation} item={item} />;

  return (
    <SafeAreaView styles={styles.container}>
      <Button
        title="Go to CodeScaner"
        onPress={() => navigation.navigate(ROUTES_NAMES.CODE_SCANER)}
      />
      <Text>Items count: {data.items.length}</Text>
      <FlatList
        inverted
        data={data.items}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

Items.propTypes = {
  navigation: T.object.isRequired,
};
