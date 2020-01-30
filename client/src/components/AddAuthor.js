import React, {useState} from 'react';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {addAuthorMutation, getBooksQuery} from '../queries/query'

function AddAuthor(props) {

	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [bookId, setBookId] = useState('');

	const { loading, error, data } = useQuery(getBooksQuery);
	const [addAuthor] = useMutation(addAuthorMutation);

	const submitForm = (e) => {
		e.preventDefault()
		console.log({name, age, bookId});
		addAuthor({
			variables: {
				name, age, bookId
			},
			refetchQueries: [{
				query: getBooksQuery
			}]
		})
	}

	console.log(data);

	if (loading) return <p>Loading...</p>;
	if (error) return `Error! ${error.message}`;

	return (
		<div>
			<form id="add-author" onSubmit={submitForm}>
				<div className="field">
					<label>Author Name:</label>
					<input type="text" onChange={(e) => setName(e.target.value)}/>
				</div>

				<div className="field">
					<label>Author Age:</label>
					<input type="text" onChange={(e) => setAge(e.target.value)}/>
				</div>

				<div className="field">
					<label>Book:</label>
					<select onChange={(e) => setBookId(e.target.value)}>
						<option>Select Book</option>
						{data.books.map(book => (
							<option key={book.id} value={book.id}>
								{book.name}
							</option>
						))}
					</select>
				</div>

				<button>Add Author</button>
			</form>
			<hr/>
		</div>
	);
}

export default AddAuthor;