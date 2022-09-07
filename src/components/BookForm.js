import { Form, Button, ButtonGroup, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";

const BookForm = () => {
    const [title, setTitle] = useState("");
    const [publishedDate, setPublishedDate] = useState("");
    const [genre, setGenre] = useState("");
    const nav = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault(); //prevent refresh of page when submit button is pressed
        const book = {title, publishedDate, genre};
        
        fetch('/books', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(book)
        }).then(()=>{
            console.log('new book added');
            nav('/'); //redirect to main page
        })
    }
    const handleCancel = (path) =>{
      console.log("Adding book canceled")
      nav(path);
    }

    return ( 
      <div>
        <h2>Add book</h2>
        <hr />
        <Form className="book-form" onSubmit={handleSubmit}>
          <Form.Group className="form-group" controlId="bookTitle">
          <Row xs={12}>
            <Col xs={5} className="div-center-end"><Form.Label>Title:</Form.Label></Col>
            <Col xs={7}><Form.Control type="text" placeholder="Title" name="bookTitle"
              value={title}  onChange={(e)=>setTitle(e.target.value)} required/></Col>
          </Row>
          </Form.Group>
          <Form.Group className="form-group" controlId="publishedDate">
          <Row xs={12}>
            <Col xs={5} className="div-center-end"><Form.Label>Published Date:</Form.Label></Col>
            <Col xs={7}><Form.Control type="text" placeholder="Published Date" name="publishedDate"
              value={publishedDate} onChange={(e)=>setPublishedDate(e.target.value)} required/></Col>
          </Row>
          </Form.Group>
          <Form.Group className="form-group" controlId="bookGenre">
          <Row xs={12}>
            <Col xs={5} className="div-center-end"><Form.Label>Genre:</Form.Label></Col>
            <Col xs={7}><Form.Control type="text" onChange={(e)=>setGenre(e.target.value)} placeholder="Genre" name="bookGenre"
              value={genre} required/></Col>
          </Row>
          </Form.Group>
          <Row className="formButtons">
            <Col>
              <ButtonGroup className="d-flex">
              <Button className="cancelButton" variant="primary" type="button" onClick={()=>handleCancel('/')}>Cancel</Button>
              <Button className="submitButton" variant="primary" type="submit">Submit</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
}
 
export default BookForm;