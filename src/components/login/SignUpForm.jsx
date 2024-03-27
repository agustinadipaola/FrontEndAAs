// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useHistory hook
// import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
// import { Button } from "react-bootstrap";
// import background from "../../pictures/ShoppingBackground.png";

// function SignupForm() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");
//   const [role, setRole] = useState("ROLE_USER");
//   const [error, setError] = useState(""); // State to manage error messages
//   const history = useNavigate(); // Get the history object for redirection








//   const handleSubmit = event => {
//     event.preventDefault();



//     axios.post("http://localhost:8080/api/auth/signup", { username, email, password })


//         .then(response => {
//             setUsername("");
//             setEmail("");
//             setPassword("");
//              history("/welcomesignup");
//         })
//         .catch(error => console.error(error))


// }
// return (




//   <div style={{ backgroundColor: "#003b00", borderRadius: "15px", color: "white", paddingBottom: "20px", width: "50%", margin: "auto" }} >
//   <h3 style={{ color: "white", fontFamily: "monospace" }}>Add a Buyer</h3>
//   <form onSubmit={handleSubmit} className="row gx-3 gy-2 align-items-center" style={{ justifyContent: "center", alignItems: "Center" }}>

//       {/* NEED TO FIGURE OUT HOW TO CLEAR FIELDS ON SUBMIT */}
//       <div class="col-auto">
//           <label HTMLfor="autoSizingInput">Username</label>
//           <input className="form-control" value={username} onChange={event => setUsername(event.target.value)} placeholder="Username" type="text" required></input>

//           <label HTMLfor="autoSizingInput">Last Name</label>
//           <input className="form-control" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email" type="email" required></input>

//           <label HTMLfor="autoSizingInput">Password</label>
//           <input className="form-control" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" type="password" required></input>
      
    
//           <br />
//           <button variant='primary' className="form-control" type="submit" color="primary" style={{ color: "white", fontWeight: "bold", backgroundColor: "#003b00" }}>Submit</button>
//       </div>
//   </form>

// </div>
// );
// }












 