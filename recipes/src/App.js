import './App.css';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';
import HomePage from './Components/HomePage';
import SignedInPage from './Components/LoggedInPage';
import GetRecipes from './Components/GetRecipes';
import {Container, Nav, Navbar} from 'react-bootstrap';

function App() {
  return (
    <main>
      {/* Navigation Start */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" pullLeft="true"/>
        <Navbar.Brand href="#home" pullLeft="true">Whats for dinner</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
        <Nav.Link className="justify-content-end" href="#home">
          <Profile />
        </Nav.Link>
        <Nav.Link className="justify-content-end" href="#home">
          <LoginButton />
          <LogoutButton /> 
        </Nav.Link>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    <HomePage />
    <SignedInPage />
    <GetRecipes />
    </main>
  )
}

export default App;

