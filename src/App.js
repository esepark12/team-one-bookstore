import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import BookstoreHome from './components/BookstoreHome'
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';
//import useFetch from './components/useFetch'
function App() {
  //const {data:books, error} = useFetch('http://localhost:8000/books');
  //console.log(books)
  return (
    <Container>
    <Router>
      <Row><Col>
        <div className="App">
          <h1>Team One Bookstore</h1>
        </div>
      </Col></Row>
      <Routes>
      <Route exact path="/" element={<BookstoreHome />}></Route>
      <Route path="/create" element={<BookForm/>} />
      <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </Router>
    </Container>
  );
}

export default App;
