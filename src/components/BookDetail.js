import useFetch from './useFetch'
import {useParams} from 'react-router-dom';
import {Button, Row} from 'react-bootstrap'
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
            <h2>Book detail page</h2>
            {book && !error && (
                <div>
                   <Row>
                        {book.title}
                    </Row>
                    <Row>
                        {book.publishedDate}
                    </Row>
                    <Row>
                        {book.genre}
                    </Row>
                    <Button onClick={()=>handleClick("/")}>
                        Home
                    </Button>
                </div>
            )}
        </div>
     );
}
 
export default BookDetail;