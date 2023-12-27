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
                <h1 class="display-5 fw-bold text-body-emphasis">The To-Do List</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">The best place to write a to do list. All you need to do is sign up here</p>
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
                        <h2>Create simple To-Do lists</h2>
                        <p>Simply log in and start creating your lists. All for free!</p>
                        </div>
                    </div>
                    <div class="col-md-6 padding" >
                        <div class="h-100 p-5 text-white bg-dark rounded-3 meduimcard">
                        <h2>Be More productive</h2>
                        <p>96% of people say their lives are better with to-do lists</p>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="h-100 p-5 text-white bg-dark rounded-3 darkcard">
                        <h2>Reduce stress</h2>
                        <p>To-do lists are known to help reduce stress and helps you make achievable goals to move towards</p>
                        <button class="btn btn-outline-light" type="button">Example button</button>
                        </div>
                    </div>
                </div>
            </Container>
        </>    
            )
    )
  }
export default HomePage