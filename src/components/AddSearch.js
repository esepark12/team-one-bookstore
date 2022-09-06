import { Form, Button, Row, Col} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
const AddSearch = (props) => {

    const genre = props.genre
    const nav = useNavigate();

    const handleClick = (path) =>{
        nav(path);
    }

    return ( 
        <Row xs={12} className="addSearch">
            <Col xs={8} className="sort-genre">
                <Form>
                    <Row xs={12}>
                        <Col xs={6}>
                        <Form.Group controlId="bookGenre">
                            <Form.Control type="text" placeholder="Type Genre" name="genre"
                                value={genre} onChange={props.testGenre} />
                        </Form.Group>
                        </Col>
                        <Col xs={6}>
                        <Form.Group controlId="searchButton">
                            <Button variant="primary" value={genre} onClick={props.searchByGenre}>
                                Search
                            </Button>
                        </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Col>          
            <Col xs={4} className="addButton">
                <Button onClick={()=>handleClick("/create")}>
                    Add Book
                </Button>
            </Col>
        </Row>

    );
}
 
export default AddSearch;