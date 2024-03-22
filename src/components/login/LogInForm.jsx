import React, { useState } from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import { 
    MDBContainer, 
    MDBInput, 
    MDBBtn, 
} from 'mdb-react-ui-kit'; 
import {Button } from "react-bootstrap";


function LoginForm() { 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(''); 
    const history = useNavigate(); 

    const handleLogin = async () => { 
        try { 
            if (!username || !password) { 
                setError('Please enter both username and password.'); 
                return; 
            } 

            const response = await axios.post('http://localhost:8080/auth/signin', { username, password }); 
            console.log('Login successful:', response.data); 
            history('/dashboard'); 
        } catch (error) { 
            console.error('Login failed:', error.response ? error.response.data : error.message); 
            setError('Invalid username or password.'); 
        } 
    }; 

    return ( 
        <div className="d-flex justify-content-center align-items-center vh-100"> 
            <div className="border rounded-lg p-4" style={{ width: '500px', height: 'auto', backgroundColor: 'white'}}> 
                <MDBContainer className="p-3"> 
                    <h2 className="mb-4 text-center" style={{ fontFamily: 'roboto, sans-serif' }}>Log In Page</h2> 
                    <MDBInput wrapperClass='mb-4' placeholder='Email address' id='email' value={username} type='email' onChange={(e) => setUsername(e.target.value)} /> 
                    <MDBInput wrapperClass='mb-4' placeholder='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} /> 
                    {error && <p className="text-danger">{error}</p>} {/* Render error message if exists */} 
                    <Button  variant="dark" style={{ fontFamily: 'roboto, sans-serif' }}  onClick={handleLogin}>SIGN IN</Button> 
                    <div className="text-center"> 
                        <p>Not  Registered yet? <a href="/signup" >Register Here</a></p> 
                    </div> 
                </MDBContainer> 
            </div> 
        </div> 
    ); 
} 

export default LoginForm; 

