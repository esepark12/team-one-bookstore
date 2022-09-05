import {Button, Row, Col} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

const BookTable = (props) => {
    const nav = useNavigate();

    const handleClick = (path) =>{
        nav(path);
    }

    const handleDelete = (bookId) => {
        
        fetch('http://localhost:8000/books/'+bookId, {
            method: 'DELETE'
        }).then(()=>{
            console.log("navigate to main!")
            nav('/');
        })
    }

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
            {props.books.map((book)=>(
                <Row className="book-index" key={book.id}>
                    <Col sm={8}>
                    {book.title}
                    </Col>
                    <Col sm={2} className="detail-header">
                        <Button onClick={()=>handleClick(`/books/${book.id}`)}>
                            Detail
                        </Button>
                    </Col>
                    <Col sm={2} className="delete-header">
                        <Button onClick={()=>handleDelete(book.id)}>
                            Delete
                        </Button>
                    </Col>
                </Row>
            ))}
        </Row>
    );
}
 
export default BookTable;