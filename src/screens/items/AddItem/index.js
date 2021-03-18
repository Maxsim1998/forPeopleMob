import React, { useCallback } from 'react';
import { useMutation } from '@apollo/client';
// gql
import { ADD_ITEM_MUTATION, ITEMS_QUERY } from '../../../gql';
// components
import { ItemForm } from '../../../components';
// navigation
import { ROUTES_NAMES } from '../../../navigation';

export const AddItem = ({ route, navigation }) => {
  const [addItem] = useMutation(ADD_ITEM_MUTATION);

  const saveItem = useCallback(
    (formData) => {
      const { codeData } = route.params;
      const data = { ...codeData, ...formData, isArchived: false };
      const update = (cache, { data }) => {
        const existingItems = cache.readQuery({
          query: ITEMS_QUERY,
        });
        const newItem = data.addItem;
        cache.writeQuery({
          query: ITEMS_QUERY,
          data: { items: [newItem, ...existingItems.items] },
        });
      };

      addItem({
        variables: {
          data,
        },
        update,
      }).then(() => navigation.navigate(ROUTES_NAMES.ITEMS));
    },
    [addItem, navigation]
  );

  return <ItemForm onSave={saveItem} />;
};
