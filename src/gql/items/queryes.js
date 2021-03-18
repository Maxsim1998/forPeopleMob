import gql from 'graphql-tag';

export const ITEMS_QUERY = gql`
  query Items {
    items {
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
