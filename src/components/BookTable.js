import {Button, Row, Col} from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom';

class BookTable extends React.Component {
    
    render(){
        return (   
            <Row className="book-table">
                <Row className="table-header">
                    <Col xs={6} className="book-name-header">
                    Book Title
                    </Col>
                    <Col className="detail-header">
                    Detail
                    </Col>
                    <Col className="delete-header">
                    Delete
                    </Col>
                </Row>
                <hr />
                {this.props.books.map((book)=>(
                    <Row className="book-index" key={book.id}>
                        <Col xs={6}>
                        {book.title}
                        </Col>
                        <Col className="detail-header">
                            <Link to={`/books/${book.id}`}>
                            <Button>
                                Detail
                            </Button></Link> 
                        </Col>
                        <Col className="delete-header">
                            <Button className="deleteButton" onClick={this.props.handleDelete} value={book.id} >
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