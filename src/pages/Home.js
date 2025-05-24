import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "./layouts/Navbar";



function Home(){
    useEffect(() => {
        document.title = "Home - " + process.env.REACT_APP_NAME;
    }, []);
    
    return (
        <>
            <Navbar/>

            <Link to="/login" className="btn btn-info">Login</Link>
        </>
    )
}

export default Home;