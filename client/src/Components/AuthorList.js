import React, { Component } from 'react'
import { getAuthorsQuery } from '../Queries/Queries'
import { graphql } from 'react-apollo'
import { map } from 'lodash'

class AuthorList extends Component {
    render() {
        const { authors } = this.props.data
        return (
            <div>
                {
                    map(authors, (author, key) => {
                        return (
                            <div className="container" key={key}>
                                <div className="row">
                                    <div className="col">
                                        <div className="id">
                                            {author.id}
                                        </div>
                                        <div className="name">
                                            {author.name}
                                        </div>
                                        <div className="genre">
                                            {author.age}
                                        </div>
                                        <div>
                                            <strong>
                                                Books: &nbsp;
                                            </strong>

                                            {
                                                map(author.books, (book, innerKey) => {
                                                    return (
                                                        <span key={innerKey}>
                                                            <span>
                                                                { book.name}
                                                            </span>
                                                        </span>
                                                    )
                                                })
                                            }
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

export default graphql(getAuthorsQuery)(AuthorList);
