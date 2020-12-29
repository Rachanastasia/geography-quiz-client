import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GameContextProvider } from './contexts/gameContext';
import { UserContextProvider } from './contexts/userContext';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <GameContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </GameContextProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

