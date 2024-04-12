import React from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook

function SignUpDashboard({ username }) {
  const history = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear session, remove authentication token)
    // After logout, redirect to the login page
    history("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="border rounded-lg p-4"
        style={{ width: "500px", height: "400px" }}
      >
        <h2 className="mb-4 text-center">Welcome to the Dashboard</h2>
        <p className="mb-4 text-center">Hello!</p>
        <p className="text-center">You have now registered successfully.</p>
        <div className="text-center">
          <button
            type="button"
            style={{ margin: "5px", width: "150px", color: "#fdc1da" }}
            className="btn btn-success mt-3"
            onClick={handleLogout}
          >
            {/* <strong>Logout</strong> */}
          Click Here to Log In</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpDashboard;
