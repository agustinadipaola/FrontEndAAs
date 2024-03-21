import LogInForm from "./LogInForm";
import SignupForm from "./SignUpForm";
import background from '../../pictures/ShoppingBackground.png'

function LogIn() {
  return (
    <>
      <div>
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

      <LogInForm />
        
     </div>
     </div>
    </>
  );
}

export default LogIn;
