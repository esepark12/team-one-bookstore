import React from 'react'
import AddSearch from './AddSearch'
import BookTable from './BookTable'

//const SERVICE_URL = "http://localhost:8000"
class BookstoreHome extends React.Component {

    state = {
        loading: false,
        books: [
          {
            "title": "initalTitle",
            "genre": "initialGenre",
            "publishedDate": 1230,
            "id": 0
          }],
        genre: "",
        displaySearch: false,
        displayGenre: ""
    }
    handleDelete = (e) => {
        if (e) e.preventDefault();

        let bookId = e.target.value
        
        fetch('/books/'+bookId, {
            method: 'DELETE'
        }).then(()=>{
            console.log("Deleted the book")
            this.loadBooks();
        })
    }

    testGenre = (e) => {
        let newGenre = e.target.value
        this.setState({genre: newGenre})

    }

    searchByGenre = (e) => {
        if (e) e.preventDefault();
        let genre = e.target.value
        console.log("Searched by genre: "+ genre)
        //fetch(SERVICE_URL+'/books/'+genre) //change back to this later(response must be in List form!!)
        fetch('/'+genre)
        .then(response => response.json())
        .then(data => {
          //console.log('Success:', data);
          this.setState(
            { books : data}
          )
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    
        this.setState({displayGenre: genre})
        this.setState({displaySearch: true})
        //clear genre input field
        this.setState({genre: ""})

    }

    loadBooks() {
        this.setState({ loading: true })
        console.log("Loading books")
        fetch("/books")
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
                <AddSearch books={this.state.books} 
                    searchByGenre = {this.searchByGenre}
                    testGenre = {this.testGenre}
                    genre = {this.state.genre}/>
                {this.state.displaySearch? 
                <h2>Search by Genre: { this.state.displayGenre}</h2>
                : null}
                {!this.state.loading && <BookTable books={this.state.books} 
                                            handleDelete={this.handleDelete}/>}
            </div>

        );
    }
}
 
export default BookstoreHome;