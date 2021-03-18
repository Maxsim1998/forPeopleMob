// screens
import { Items, CodeScaner, AddItem, ItemInfo, EditItem } from '../screens';
import React from 'react';
import { Text } from 'react-native';

export const ROUTES_NAMES = {
  ITEMS: 'items',
  ADD_ITEM: 'addItem',
  ITEM_INFO: 'itemInfo',
  EDIT_ITEM: 'editItem',
  CODE_SCANER: 'codeScaner',
};

export const ROUTES = [
  {
    name: ROUTES_NAMES.ITEMS,
    component: Items,
    options: {
      title: 'Home',
    },
  },
  {
    name: ROUTES_NAMES.ADD_ITEM,
    component: AddItem,
    options: {
      title: 'Add item',
    },
  },
  {
    name: ROUTES_NAMES.CODE_SCANER,
    component: CodeScaner,
    options: {
      title: 'Code scaner',
    },
  },
  {
    name: ROUTES_NAMES.ITEM_INFO,
    component: ItemInfo,
    options: {
      title: 'Item info',
    },
  },
  {
    name: ROUTES_NAMES.EDIT_ITEM,
    component: EditItem,
    options: {
      title: 'Edit item',
    },
  },
];

export const INITIAL_ROUTE_NAME = ROUTES_NAMES.ITEMS;
