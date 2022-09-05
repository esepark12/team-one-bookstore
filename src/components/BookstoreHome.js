//import {Button, Row, Col} from 'react-bootstrap'
//import {useState} from 'react'
import AddSearch from './AddSearch'
import useFetch from './useFetch'
import BookTable from './BookTable'

const BookstoreHome = () => {

    const {data:books, error} = useFetch('http://localhost:8000/books');
    console.log(books);
    return ( 
        <div className="book-store">
            <AddSearch />
            {error && <div>{error}</div>}
            {books && <BookTable books={books} />}
        </div>

     );
}
 
export default BookstoreHome;