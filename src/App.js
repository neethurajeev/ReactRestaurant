import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import RestaurantDetails from './components/RestaurantDetails';
import Rating from './components/Rating';
function App() {
  const name="Neethu"
  return (
    <Router>
      <h1>{`Welcome ${name}`}</h1>
      <Header/>
      <footer/>
      <main className="App">
      <Container>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/details/:id' element={<RestaurantDetails/>}/>
      </Routes>
      </Container>
      </main>
      </Router>
  );
}

export default App;
