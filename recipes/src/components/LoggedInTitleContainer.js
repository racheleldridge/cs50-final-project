import {React, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const LoggedInTitleContainer = (props) => {

    const retry = props.retry
    
    return (
        <>
            <div className="signinheader text-center">
            <img className="logo" src="https://i.imgur.com/2psLFWP.png" alt="Logo of a hot pot with steam" />
                <h1 className="display-5 fw-bold text-body-emphasis">Whats for Dinner?</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Try this!</p>
                    </div>
                    <Button onClick={() => retry()} > Something Else? </Button>
            </div>
        </>
    )
}

export default LoggedInTitleContainer