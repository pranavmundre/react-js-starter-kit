import React, { useEffect } from 'react';
import Navbar from "./layouts/Navbar";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL_Login } from "../api/ApiUrls";
import { GetRoutePath } from "../routes/routesConfig";
import LoaderUI from "./layouts/LoaderUI";


function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);

     useEffect(() => {
        console.log(process.env.REACT_APP_NAME);
        document.title = "Login - " + process.env.REACT_APP_NAME;
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(API_URL_Login, { email, password });
            const { token } = response.data;
            
            console.log("Call api: ", GetRoutePath('user_dashboard'));

            if (response.status === 200) {
                localStorage.setItem('token', token);
                localStorage.setItem('userRole', 'user')
                // console.log('savedRole: ', localStorage.getItem('userRole', ))

                console.log('Login successful!');
                setMessage('Login successful!');
                navigate(GetRoutePath('user_dashboard') );
            } else {
                console.log("Login failed");
            }
            console.log(response.data); 

        } catch (error) {
            console.log(error); 
            if (error.response) {
                setMessage(`Error: ${error.response.data.message}`);
            } else {
                setMessage('Login failed. Please try again.');
            }
        }
        finally {
            setLoading(false); 
        }
    };

    return (
        <>
            <LoaderUI loading={isLoading} />
            <Navbar />
            <div className="container p-4 col-md-12">
                <form onSubmit={handleLogin}>
                    <div>
                        {message && <p>{message}</p>}
                    </div>

                    <div className="col-md-7 mb-2">
                        <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="col-md-7 mb-2">
                        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div className="col-md-7 mb-2">
                        <button className="btn btn-info" type="submit" onClick={handleLogin}>Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
