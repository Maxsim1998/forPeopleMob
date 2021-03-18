import T from 'prop-types';

export const ItemShape = {
  _id: T.string.isRequired,
  tags: T.array,
  name: T.string.isRequired,
  description: T.string,
  isArchived: T.bool.isRequired,
  code: T.string.isRequired,
  codeType: T.string.isRequired,
};
