import React, { useState } from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; // Import useHistory hook 
import { 
    MDBContainer, 
    MDBInput, 
    MDBBtn, 
} from 'mdb-react-ui-kit'; 
import {Button } from "react-bootstrap";
import background from '../../pictures/ShoppingBackground.png'


function SignupForm() { 
    const [fullName, setFullName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [role, setRole] = useState('ROLE_CUSTOMER'); 
    const [error, setError] = useState(''); // State to manage error messages 
    const history = useNavigate(); // Get the history object for redirection 

    const handleSignup = async () => { 
        try { 
            // Check for empty fields 
            if (!fullName || !email || !password || !confirmPassword) { 
                setError('Please fill in all fields.'); 
                return; 
            } 

            if (password !== confirmPassword) { 
                throw new Error("Passwords do not match"); 
            } 

            const response = await axios.post('http://localhost:8080/auth/signup', { 
                fullName, 
                email, 
                password, 
                role 
            }); 
            // Handle successful signup 
            console.log(response.data); 
            history('/dashboard'); 
        } catch (error) { 
            // Handle signup error 
            console.error('Signup failed:', error.response ? error.response.data : error.message); 
            setError(error.response ? error.response.data : error.message); 
        } 
    }; 

    return ( 
        <div className="bg"    style={{
            height: '100vh', // Set the height to 100% of the viewport height
            background: `url(${background})`, // Use the background image
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', // Adjust to cover the entire container
            display: 'flex', // Add flex display
            alignItems: 'center', // Vertically center content
            justifyContent: 'center', // Horizontally center content
          }}>

        <div className="d-flex justify-content-center align-items-center vh-100"> 
        <div className="border rounded-lg p-4" style={{ width: '500px', height: 'auto', backgroundColor: 'white'}}> 
                <MDBContainer className="p-3"> 
                    <h2 className="mb-4 text-center" style={{ fontFamily: 'roboto, sans-serif' }}>Sign Up Page</h2> 
                    {/* Render error message if exists */} 
                    {error && <p className="text-danger">{error}</p>} 
                    <MDBInput wrapperClass='mb-3' id='fullName' placeholder={"Full Name"} value={fullName} type='text'
                              onChange={(e) => setFullName(e.target.value)}/> 
                    <MDBInput wrapperClass='mb-3' placeholder='Email Address' id='email' value={email} type='email'
                              onChange={(e) => setEmail(e.target.value)}/> 
                    <MDBInput wrapperClass='mb-3' placeholder='Password' id='password' type='password' value={password} 
                              onChange={(e) => setPassword(e.target.value)}/> 
                    <MDBInput wrapperClass='mb-3' placeholder='Confirm Password' id='confirmPassword' type='password'
                              value={confirmPassword} 
                              onChange={(e) => setConfirmPassword(e.target.value)}/> 


                    <label className="form-label mb-1">Role:</label> 
                    <select className="form-select mb-4" value={role} onChange={(e) => setRole(e.target.value)}> 
                        <option value="ROLE_CUSTOMER">Customer</option> 
                        <option value="ROLE_ADMIN">Admin</option> 
                    </select> 
                    <Button  variant="dark" style={{ fontFamily: 'roboto, sans-serif' }} 
                            onClick={handleSignup}>Sign Up 
                    </Button> 

                    <div className="text-center"> 
                        <p>Already Registered? <a href="/">Login</a></p> 
                    </div> 

                </MDBContainer> 
            </div> 
        </div> 
        </div>
    ); 
} 

export default SignupForm;