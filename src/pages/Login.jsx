import Navbar from "../layouts/Navbar";
import { useState } from 'react';
import axios from 'axios';


function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/api/login', { email, password });
            const { token, user } = res.data;

            // Save token
            localStorage.setItem('token', token);

            // Set user in context or state
            setUser(user);

        } catch (err) {
            console.error('Login failed', err);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container p-4 col-md-12">
                <form onSubmit={login}>
                    <div className="col-md-7 mb-2">
                        <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className="col-md-7 mb-2">
                        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div className="col-md-7 mb-2">
                        <button className="btn btn-info" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
