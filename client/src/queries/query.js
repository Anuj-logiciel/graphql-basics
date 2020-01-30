import gql from 'graphql-tag';

const getAuthorsQuery = gql`
    query getAuthors{
        authors {
            name
            id
        }
    }
`

const addBookMutation = gql`
    mutation addBook($name: String!, $genre: String!, $authorId: String!){
        addBook(name: $name genre:$genre authorId: $authorId){
            name
            id
        }
    }
`

const addAuthorMutation = gql`
	mutation addAuthor($name: String!, $age: String!, $bookId: String!){
		addAuthor(name: $name age:$age bookId: $bookId){
			name
			id
		}
	}
`

const getBooksQuery = gql`
    query getBooks{
        books {
            id
            name
        }
    }
`
const getBookQuery = gql`
    query getBook($id: ID){
        book(id: $id){
            id
            name
            genre
            author{
                id
                name
                books{
                    id
                    name
                }
            }
        }
    }
`
export {getAuthorsQuery, addBookMutation, getBooksQuery, getBookQuery, addAuthorMutation}