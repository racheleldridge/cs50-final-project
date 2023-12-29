import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
// import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SignedInPage = () => {
    const {isAuthenticated } = useAuth0();
    
    return (
        isAuthenticated && (
            <>
            <div class="text-center">
            <img class="logo" src="https://i.imgur.com/2psLFWP.png" alt="Logo of a hot pot with steam" />
                <h1 class="display-5 fw-bold text-body-emphasis">Whats for Dinner?</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">Try this!</p>
                    </div>
            </div>
        </>    
            )
    )
  }
export default SignedInPage