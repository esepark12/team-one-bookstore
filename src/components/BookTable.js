import {Button, Row, Col} from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom';

class BookTable extends React.Component {

    /*
    const handleDelete = (bookId) => {
        
        fetch('http://localhost:8000/books/'+bookId, {
            method: 'DELETE'
        }).then(()=>{
            console.log("navigate to main!")
            nav('/');
        })
    }
    */
    render(){
        return (   
            <Row className="book-table">
                <Row className="table-header">
                    <Col sm={8} className="book-name-header">
                    Book Name
                    </Col>
                    <Col sm={2} className="detail-header">
                    Detail
                    </Col>
                    <Col sm={2} className="delete-header">
                    Delete
                    </Col>
                </Row>
                <hr />
                {this.props.books.map((book)=>(
                    <Row className="book-index" key={book.id}>
                        <Col sm={8}>
                        {book.title}
                        </Col>
                        <Col sm={2} className="detail-header">
                            <Link to={`/books/${book.id}`}>
                            <Button>
                                Detail
                            </Button></Link> 
                        </Col>
                        <Col sm={2} className="delete-header">
                            <Button onClick={this.props.handleDelete} value={book.id}>
                                Delete
                            </Button>
                        </Col>
                    </Row>
                ))}
            </Row>
        );
    }
}
 
export default BookTable;