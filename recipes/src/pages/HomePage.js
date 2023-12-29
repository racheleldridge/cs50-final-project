import React, { useEffect } from 'react';
import '../recipe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import '../index.css';
const HomePage = (props) => {
    const Navigate = useNavigate()
    const login = props.login

    useEffect(() => {
        if (props.isAuthenticated) Navigate("/random-recipe")
    }, [props.isAuthenticated])
  
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
            <img className="logo" src="https://i.imgur.com/2psLFWP.png" alt="Logo of a hot pot with steam" />
                <h1 className="display-5 fw-bold text-body-emphasis">Whats for Dinner</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">The best place to get new recipes and try something new. All you need to do is sign up here</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Button bsStyle="primary" onClick={() => login()}>
                            Sign Up
                        </Button>
                        </div>
                    </div>
            </div>
            <Container>
                <div className="row align-items-md-stretch">
                    <div className="col-md-6 padding">
                        <div className="lightcard h-100 p-5 text-white  rounded-3 ">
                        <h2>Find simple recipes</h2>
                        <p>Simply log in and start finding new ideas for your meals. All for free!</p>
                        </div>
                    </div>
                    <div className="col-md-6 padding" >
                        <div className="h-100 p-5 text-white rounded-3 meduimcard">
                        <h2>Be More productive</h2>
                        <p>People struggle to find creative meals that are new and tasty, this takes all the stress out of thinking for ideas</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-white rounded-3 darkcard">
                            <h2>Try something new!</h2>
                            <p>Don't get stuck making the same old meals and find something new</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>    
    )
}

export default HomePage