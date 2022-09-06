import React from 'react'
import AddSearch from './AddSearch'
import BookTable from './BookTable'

const SERVICE_URL = "http://localhost:8000"
class BookstoreHome extends React.Component {

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
        
        fetch(SERVICE_URL+'/books/'+bookId, {
            method: 'DELETE'
        }).then(()=>{
            console.log(bookId)
            console.log("navigate to main!")
            this.loadBooks();
        })
    }

    searchByGenre = (e) => {
        //if (e) e.preventDefault();
        let genre = e.target.value
        console.log("Searched by genre: "+ genre)
        //fetch(SERVICE_URL+'/books/'+genre) //change back to this later(response must be in List form!!)
        fetch(SERVICE_URL+'/search')
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          this.setState(
            { books : data}
          )
        })
        .catch((error) => {
          console.error('Error:', error);
      });
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
                <AddSearch books={this.state.books} 
                    searchByGenre = {this.searchByGenre}/>
                {!this.state.loading && <BookTable books={this.state.books} 
                                            handleDelete={this.handleDelete}/>}
            </div>

        );
    }
}
 
export default BookstoreHome;