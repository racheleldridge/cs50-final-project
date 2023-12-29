import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import '../App.css';

const HomePage = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  
    return (
        !isAuthenticated && (
            <>
            <div class="px-4 py-5 my-5 text-center">
            <img class="logo" src="https://i.imgur.com/2psLFWP.png" alt="Logo of a hot pot with steam" />
                <h1 class="display-5 fw-bold text-body-emphasis">Whats for Dinner</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">The best place to get new recipes and try something new. All you need to do is sign up here</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Button bsStyle="primary" onClick={() => loginWithRedirect()}>
                            Sign Up
                        </Button>
                        </div>
                    </div>
            </div>
            <Container>
                <div class="row align-items-md-stretch">
                    <div class="col-md-6 padding">
                        <div class="lightcard h-100 p-5 text-white bg-dark rounded-3 ">
                        <h2>Find simple recipes</h2>
                        <p>Simply log in and start finding new ideas for your meals. All for free!</p>
                        </div>
                    </div>
                    <div class="col-md-6 padding" >
                        <div class="h-100 p-5 text-white bg-dark rounded-3 meduimcard">
                        <h2>Be More productive</h2>
                        <p>People struggle to find creative meals that are new and tasty, this takes all the stress out of thinking for ideas</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-md-6">
                        <div class="h-100 p-5 text-white bg-dark rounded-3 darkcard">
                            <h2>Try something new!</h2>
                            <p>Don't get stuck making the same old meals and find something new</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>    
            )
    )
  }
export default HomePage