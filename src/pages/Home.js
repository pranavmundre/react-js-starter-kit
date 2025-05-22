import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";



function Home(){
    return (
        <>
            <Navbar/>

            <Link to="/login" className="btn btn-info">Login</Link>
        </>
    )
}

export default Home;