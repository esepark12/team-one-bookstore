import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'
import BookstoreHome from './components/BookstoreHome'
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';
import {Link} from 'react-router-dom';

function App() {
  const handleReload = () => {
    const location =  window.location.pathname
    if (location === '/') window.location.reload()
    //else do nothing cuz <Link to='/' /> will handle that
  }
  return (
    <Container>
    <Router>
      <Row><Col>
        <div className="app-header">
          
          <h1>
            <Link to = "/" onClick={handleReload} style={{"textDecoration": 'none'}}>
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
