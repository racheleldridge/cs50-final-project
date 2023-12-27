import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  
    return (
        !isAuthenticated && (
            <Button bsStyle="primary" onClick={() => loginWithRedirect()}>
                Sign In
            </Button>
        )
    )
  }
export default LoginButton