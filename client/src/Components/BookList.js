import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { getBooksQuery, addAuthorMutation } from '../Queries/Queries'
import { map } from 'lodash'
 
class BookList extends Component {
    render() {
        /**
         *  this.props.addBook({
         *      variables: {
         *          name: this.state.name,
         *          genre: this.state.genre,
         *          authorId: this.state.authorId
         *      },
         *      refetchQueries: [{
         *          query: getBooksQuery
         *      }]
         *  })
         */
        // const { books } = this.props.data
        const { books } = this.props.getBooksQuery
        return (
            <div>
                {
                    map(books, (book, key) => {
                        return (
                            <div className="container" key={key}>
                                <div className="row">
                                    <div className="col">
                                        <div className="id">
                                            { book.id }
                                        </div>
                                        <div className="name">
                                            { book.name }
                                        </div>
                                        <div className="genre">
                                            { book.genre }
                                        </div>
                                        <div className="author name">
                                            { book.author.name }
                                        </div>
                                        <div className="author age">
                                            { book.author.age }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

// export default graphql(getBooksQuery)(BookList);

// Bind Multiple Queries
export default compose(
    graphql(getBooksQuery, {name: "getBooksQuery"}),
    graphql(addAuthorMutation, {name: "addBook"}),
    // graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
)(BookList)
