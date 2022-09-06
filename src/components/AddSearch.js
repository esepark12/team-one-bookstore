import { Form, Button, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import {useNavigate} from "react-router-dom";
const AddSearch = (props) => {

    const genre = props.genre
    const nav = useNavigate();

    const handleClick = (path) =>{
        nav(path);
    }

    return ( 
        <Row>
            <Col sm={5} className="sort-genre">
                <Form>
                    <Row className="d-flex align-items-end">
                        <Col>
                        <Form.Group controlId="bookGenre">
                            <Form.Control type="text" placeholder="Type Genre" name="genre"
                                value={genre} onChange={props.testGenre} />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="searchButton">
                            <Button variant="primary" value={genre} onClick={props.searchByGenre}>
                                Search
                            </Button>
                        </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col sm={4} className="addButton">
                <Button onClick={()=>handleClick("/create")}>
                    Add Employee
                </Button>
            </Col>
        </Row>

    );
}
 
export default AddSearch;