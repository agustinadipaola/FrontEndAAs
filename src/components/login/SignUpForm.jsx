import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import background from "../../pictures/ShoppingBackground.png";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("ROLE_USER");
  const [error, setError] = useState(""); // State to manage error messages
  const history = useNavigate(); // Get the history object for redirection








  const handleSubmit = event => {
    event.preventDefault();



    axios.post("http://localhost:8080/api/auth/signup", { username, email, password })


        .then(response => {
            setUsername("");
            setEmail("");
            setPassword("");
            history("/welcomesignup");
        })
        .catch(error => console.error(error))


}
return (




  <div style={{ backgroundColor: "#003b00", borderRadius: "15px", color: "white", paddingBottom: "20px", width: "50%", margin: "auto" }} >
  <h3 style={{ color: "white", fontFamily: "monospace" }}>Add a Buyer</h3>
  <form onSubmit={handleSubmit} className="row gx-3 gy-2 align-items-center" style={{ justifyContent: "center", alignItems: "Center" }}>

      {/* NEED TO FIGURE OUT HOW TO CLEAR FIELDS ON SUBMIT */}
      <div class="col-auto">
          <label for="autoSizingInput">First Name</label>
          <input className="form-control" value={username} onChange={event => setUsername(event.target.value)} placeholder="First Name" type="text" required></input>

          <label for="autoSizingInput">Last Name</label>
          <input className="form-control" value={email} onChange={event => setEmail(event.target.value)} placeholder="Last Name" type="text" required></input>

          <label for="autoSizingInput">Postcode</label>
          <input className="form-control" value={password} onChange={event => setPassword(event.target.value)} placeholder="Post Code" type="text" required></input>
      
    
          <br />
          <button variant='primary' className="form-control" type="submit" color="primary" style={{ color: "white", fontWeight: "bold", backgroundColor: "#003b00" }}>Submit</button>
      </div>
  </form>

</div>
);
}












  // const handleSignup = async () => {
  //   try {
  //     // Check for empty fields
  //     if (!username || !email || !password || !confirmPassword) {
  //       setError("Please fill in all fields.");
  //       return;
  //     }

  //     if (password !== confirmPassword) {
  //       throw new Error("Passwords do not match");
  //     }

  //     const response = await axios.post("http://localhost:8080/api/auth/signup", {
  //       username,
  //       email,
  //       password,
  //       role,
  //     });
  //     // Handle successful signup
  //     console.log(response.data);
  //     history("/dashboard");
  //   } catch (error) {
  //     // Handle signup error
  //     console.error(
  //       "Signup failed:",
  //       error.response ? error.response.data : error.message
  //     );
  //     setError(error.response ? error.response.data : error.message);
  //   }
  // };

  // function handleSignup() {
  //   axios.post("http://localhost:8080/api/auth/signup", {
  //     username,
  //     email,
  //     password
  //   }).then((response) => {
  //     setUsername("");
  //     setPassword("");
  //     setEmail("");
  //     console.log(username);
  //     console.log(password);
  //     console.log(email);

  //   })
  //     .catch((err) => console.error(err));

  // }

  // return (
  //   <div
  //     className="bg"
  //     style={{
  //       height: "100vh", // Set the height to 100% of the viewport height
  //       background: `url(${background})`, // Use the background image
  //       backgroundPosition: "center",
  //       backgroundRepeat: "no-repeat",
  //       backgroundSize: "cover", // Adjust to cover the entire container
  //       display: "flex", // Add flex display
  //       alignItems: "center", // Vertically center content
  //       justifyContent: "center", // Horizontally center content
  //     }}
  //   >
  //     <div className="d-flex justify-content-center align-items-center vh-100">
  //       <div
  //         className="border rounded-lg p-4"
  //         style={{ width: "500px", height: "auto", backgroundColor: "white" }}
  //       >
  //         <MDBContainer className="p-3">
  //           <h2
  //             className="mb-4 text-center"
  //             style={{ fontFamily: "roboto, sans-serif" }}
  //           >
  //             Sign Up Page
  //           </h2>
  //           {/* Render error message if exists */}
  //           {error && <p className="text-danger">{error}</p>}
            
            
  //           <MDBInput
  //             wrapperClass="mb-3"
  //             id="username"
  //             placeholder={"Username"}
  //             value={username}
  //             type="text"
  //             onChange={(e) => setUsername(e.target.value)}
  //           />
  //           <MDBInput
  //             wrapperClass="mb-3"
  //             placeholder="Email Address"
  //             id="email"
  //             value={email}
  //             type="email"
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //           <MDBInput
  //             wrapperClass="mb-3"
  //             placeholder="Password"
  //             id="password"
  //             type="password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //           />
            {/* <MDBInput
              wrapperClass="mb-3"
              placeholder="Confirm Password"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            /> */}

            {/* <label className="form-label mb-1">Role:</label>
            <select
              className="form-select mb-4"
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
            >
              <option value="ROLE_USER">Customer</option>
              <option value="ROLE_ADMIN">Admin</option>
              <option value="ROLE_MODERATOR">Moderator</option>
            </select> */}
//             <Button
//               variant="dark"
//               style={{ fontFamily: "roboto, sans-serif" }}
//               onClick={handleSignup}
//             >
//               Sign Up
//             </Button>
//             <div className="text-center">
//               <br />

//               <p>
//                 Already Registered? <a href="/">Login</a>
//               </p>
//             </div>
//           </MDBContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

export default SignupForm;
