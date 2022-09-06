import {Button, Row, Col} from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom';

class BookTable extends React.Component {
    
    render(){
        return (   
            <Row className="book-table">
                <Row xs={12} className="table-header">
                    <Col xs={6} className="book-title-header">
                    Book Title
                    </Col>
                    <Col xs={3} className="detail-header">
                    Detail
                    </Col>
                    <Col xs={3} className="delete-header">
                    Delete
                    </Col>
                </Row>
                <hr />
                {this.props.books.map((book)=>(
                    <div>
                    <Row xs={12} className="book-index" key={book.id}>
                        <Col xs={6} className="book-title-index">
                        {book.title}
                        </Col>
                        <Col xs={3} className="detail-header">
                            <Link to={`/books/${book.id}`}>
                            <Button>
                                Detail
                            </Button></Link> 
                        </Col>
                        <Col xs={3} className="delete-header">
                            <Button onClick={this.props.handleDelete} value={book.id} >
                                Delete
                            </Button>
                        </Col>
                    </Row>
                    <hr class="index-separator"/>
                    </div>
                ))}
            </Row>
        );
    }
}
 
export default BookTable;