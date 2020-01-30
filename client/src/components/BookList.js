import React, { Component, useState } from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks'
import BookDetail from './BookDetail'
import AddBook from './AddBook'
import AddAuthor from './AddAuthor'

const getBooks = gql`
	query getBooks{
		books {
			id
			name
		}
	}
`;

function BookList(props){

    const { loading, error, data } = useQuery(getBooks);
    const [selectedBook, setSelectedBook] = useState('')

	console.log(data)

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
			<AddBook />
			<AddAuthor/>

            book List
            
            <ul id="book-list">
            {data.books.map(book => (
                <li key={book.id} onClick={(e) => setSelectedBook(book.id) }>
               		{book.name}
                </li>
            ))}
            </ul>
            
            <BookDetail bookId={selectedBook}/>
        </div>
    );
}

export default BookList;