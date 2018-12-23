# GraphQL

**Node Modules**

    npm install --save-dev express express-graphql graphql
    npm install --save-dev nodemon -g
    npm install --save create-react-app -g
    
    npm install --save lodash



**Step 1**

* First Create a Object Type
* It will have two properties name, fields
* Fields is wrapped around a function [Done need to worry about order]
* Contains: name, field ==> type

        const BookType = new GraphQLObjectType({
            name: 'Book', 
            fields: () => ({   
                id: {
                    type: GraphQLID,
                },
                name: {
                    type: GraphQLString,
                },
                genre: {
                    type: GraphQLString,
                }
            })
        })


**Step 2**

* RootQuery contains all the Object Type
* Therefore include the BookType inside the RootQueryType

        const RootQuery = new GraphQLObjectType({
            name: 'RootQueryType',
            fields: {
                book: {
                    type: BookType,
                    args: {
                        id: {
                            type: GraphQLID
                        }
                    },
                    resolve(parent, args) {
                        _.find(books, {
                            id: args.id
                        })
                    }
                } 
            }
        })


<!-- Common Queries -->
**Common Queries**

    { 
        book(id: 6) {
            name
            genre
            author {
                name
                age
                books {
                    name
                    genre
                }
        }
    }
}