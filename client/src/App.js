import React, { Component } from 'react'
import BookList from './Components/BookList'
import AuthorList from './Components/AuthorList'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './App.css' 

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <div className="header">
            <h2> Book List </h2>
          </div>
          <BookList />
        </div>
        <div id="main">
          <div className="header">
            <h2> Authors List </h2>
          </div>
          <AuthorList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
