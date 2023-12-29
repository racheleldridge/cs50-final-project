import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"
import Profile from "../components/Profile"
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"

const HeaderContainer = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
    const logout = props.logout
    const login = props.login

    useEffect(() => {
        setIsAuthenticated(props.isAuthenticated)
    }, [props.isAuthenticated])

    useEffect(() => {
        if (!props.user) return;
        setUser(props.user)
    }, [props.user])

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navigation">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Link to={"/home"}>
                    <Navbar.Brand >
                        <img src="https://i.imgur.com/D9bjQqG.png" alt="Logo" class="d-inline-block align-text-center headerlogo" />
                        Whats for dinner
                    </Navbar.Brand>
                </Link>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" />
                <Link className="justify-content-end" to="/home">
                    <Profile user={user && user}/>
                </Link>
                <Link className="justify-content-end" href="/randm-recipes">
                    {console.log(isAuthenticated)}
                    {isAuthenticated && isAuthenticated 
                        ?
                        <Button bsStyle="primary" onClick={() => logout()}>
                            Sign Out
                        </Button>
                        :
                        <Button bsStyle="primary" onClick={() => login()}>
                            Sign In
                        </Button>
                    }
                </Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default HeaderContainer