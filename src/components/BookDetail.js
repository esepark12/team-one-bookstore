import useFetch from './useFetch'
import {useParams} from 'react-router-dom';
import { Form, Button, ButtonGroup, Row, Col} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

const BookDetail = () => {

    const {id} = useParams();
    const {data: book, error} =useFetch('/books/'+id);
    //const book = "";
    
    const nav = useNavigate();

    const handleClick = (path) =>{
        nav(path);
    }

    return ( 
        <div className="book-detail">
            <h2>Book details</h2>
            <hr />
            {book && !error && (
            <Form className="book-form">
            <Form.Group className="form-group" controlId="bookTitle">
                <Row xs={12}>
                    <Col xs={5} className="div-center-end"><Form.Label>Title:</Form.Label></Col>
                    <Col xs={7}><Form.Control type="text" placeholder={book.title} name="bookTitle"
                    value={book.title} required/></Col>
                </Row>
            </Form.Group>

            <Form.Group className="form-group" controlId="publishedDate">
            <Row xs={12}>
                <Col xs={5} className="div-center-end"><Form.Label>Published Date:</Form.Label></Col>
                <Col xs={7}><Form.Control type="text" placeholder={book.publishedDate} name="publishedDate"
                value={book.publishedDate} required/></Col>
            </Row>
            </Form.Group>
            <Form.Group className="form-group" controlId="bookGenre">
            <Row xs={12}>
                <Col xs={5} className="div-center-end"><Form.Label>Genre:</Form.Label></Col>
                <Col xs={7}><Form.Control type="text" placeholder={book.genre} name="bookGenre"
                value={book.genre} required/></Col>
            </Row>
            </Form.Group>
            <Row className="formButtons">
            <Col>
              <ButtonGroup className="d-flex">
              <Button variant="primary" type="button" onClick={()=>handleClick('/')}>Home</Button>
              </ButtonGroup>
            </Col>
            </Row>
        </Form>
        )}
        </div>
     );
}
 
export default BookDetail;