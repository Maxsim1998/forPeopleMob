import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const customFetch = (uri, options) => {
  return fetch(uri, options).then((response) => {
    if (response.status >= 500) {
      // or handle 400 errors
      return Promise.reject(response.status);
    }
    return response;
  });
};

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000',
    fetch: customFetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
