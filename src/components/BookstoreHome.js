//import {Button, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import React from 'react'
import AddSearch from './AddSearch'
import useFetch from './useFetch'
import BookTable from './BookTable'

const SERVICE_URL = "http://localhost:8000"
class BookstoreHome extends React.Component {

    //const {data:books, error} = useFetch('http://localhost:8000/books');
    //console.log(books);
    state = {
        loading: false,
        books: [
          {
            "title": "initalTitle",
            "genre": "initialGenre",
            "publishedDate": 1230,
            "id": 0
          }]
    }
    handleDelete = (e) => {
        if (e) e.preventDefault();

        let bookId = e.target.value
        
        fetch('http://localhost:8000/books/'+bookId, {
            method: 'DELETE'
        }).then(()=>{
            console.log(bookId)
            console.log("navigate to main!")
            this.loadBooks();
        })
    }

    loadBooks() {
        this.setState({ loading: true })
        console.log("Loading books")
        fetch(SERVICE_URL + "/books")
          .then(data => data.json())
          .then(data => this.setState(
            { books: data, loading: false }
          ))
    }
    
    componentDidMount() {
        console.log("App is now mounted.")
        this.loadBooks();
    }
    render() {
        return ( 
            <div className="book-store">
                <AddSearch />
                {!this.state.loading && <BookTable books={this.state.books} 
                                            handleDelete={this.handleDelete}/>}
            </div>

        );
    }
}
 
export default BookstoreHome;