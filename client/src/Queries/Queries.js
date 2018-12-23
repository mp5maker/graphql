import { gql } from 'apollo-boost'

const getAuthorsQuery = gql`
    {
        authors {
            id
            name
            age
            books {
                name
            }
        }
    }
`

const getBooksQuery = gql`
    {
        books {
            id
            name
            genre
            author {
                name
                age
                books {
                    name
                }
            }
        }
    }
`

const addAuthorMutation = gql`
     mutation {
        addAuthor(name: "Photon", age: 29) {
            name
            age
        }
    }
`

const addBookMutation = gql`
     mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: "Photon", genre: "Fantasy", authorId: 7) {
            name
            age
        }
    }
`

const getBookQuery = gql`
    query($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`

const getAuthorQuery = gql`
    query($id: ID) {
        author(id: $id) {
            id
            name
            age
            books {
                name
            }
        }
    }
`


export { getAuthorsQuery, getBooksQuery, addAuthorMutation, addBookMutation, getBookQuery, getAuthorQuery }