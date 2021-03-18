import { gql } from '@apollo/client';

export const ADD_ITEM_MUTATION = gql`
  mutation AddItem($data: AddItemInput) {
    addItem(data: $data) {
      _id
      codeType
      code
      name
      description
      isArchived
      tags
      # count
    }
  }
`;
