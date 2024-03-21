import LogInForm from "./LogInForm";
import SignupForm from "./SignUpForm";

function LogIn() {
  return (
    <>
      <div>
      <LogInForm />
        <SignupForm />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
    </>
  );
}

export default LogIn;
