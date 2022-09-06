import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import BookstoreHome from './components/BookstoreHome'
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';
import {Link} from 'react-router-dom';

function App() {
  return (
    <Container>
    <Router>
      <Row><Col>
        <div className="App">
          
          <h1>
            <Link to = "/" onClick={() => window.location.reload()} style={{ textDecoration: 'none', color:"black" }}>
            Team One Bookstore
            </Link>
          </h1>

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
