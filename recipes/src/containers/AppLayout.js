import {Navigate, Route, Routes} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react"
import HeaderContainer from "./HeaderContainer";
import FooterContainer from "./FooterContainer";
import React from "react";

import HomePage from "../pages/HomePage";
import RandomRecipes from "../pages/RandomRecipes"


const AppLayout = () => {

    const {user, isAuthenticated, loginWithRedirect, logout} = useAuth0()
    const suspense_fallback = <div style={{width: "100vw", height: "100vh"}}/>

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                  crossOrigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous" />

            <HeaderContainer user={user} login={loginWithRedirect.bind(this)} logout={logout.bind(this)} isAuthenticated={isAuthenticated}/>
            <>
                <Routes>
                    <Route exact path="/home"
                           element={<Navigate to="/"/>}/>
                    <Route path="/" element={
                        <React.Suspense fallback={suspense_fallback}>
                            <HomePage isAuthenticated={isAuthenticated} login={loginWithRedirect.bind(this)} />
                        </React.Suspense>
                    }/>
                    <Route path="/random-recipe" element={
                        <React.Suspense fallback={suspense_fallback}>
                            <RandomRecipes isAuthenticated={isAuthenticated} />
                        </React.Suspense>
                    }/>
                </Routes>
            </>
            <FooterContainer/>
        </>
    )
}

export default AppLayout