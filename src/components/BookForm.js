import { Form, Button, Row, Col} from 'react-bootstrap'
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
        
        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(book)
        }).then(()=>{
            console.log('new book added');
            nav('/'); //redirect to main page
        })
    }

    return ( 
        <Form className="bookForm" onSubmit={handleSubmit}>
          <Form.Group controlId="bookTitle">
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" placeholder="Title" name="bookTitle"
              value={title}  onChange={(e)=>setTitle(e.target.value)} required/>
          </Form.Group>
          <Form.Group controlId="publishedDate">
            <Form.Label>Published Date:</Form.Label>
            <Form.Control type="text" placeholder="Published Date" name="publishedDate"
              value={publishedDate} onChange={(e)=>setPublishedDate(e.target.value)} required/>
          </Form.Group>
          <Form.Group controlId="bookGenre">
            <Form.Label>Genre:</Form.Label>
            <Form.Control type="text" onChange={(e)=>setGenre(e.target.value)} placeholder="Genre" name="bookGenre"
              value={genre} />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}
 
export default BookForm;