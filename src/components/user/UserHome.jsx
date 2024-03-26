import "bootstrap/dist/css/bootstrap.css";
import background from "../../pictures/ShoppingBackground.png";
import { MdWavingHand } from "react-icons/md";

function UserHome() {
  return (
    <div style={{
      display: "flex", // Enable flex display
      flexDirection: "column", // Stack children vertically
      justifyContent: "flex-start", // C Align content to the top
      alignItems: "center", // Center content vertically
      height: "100vh", // Full viewport height
      background: `url(${background})`, // Background image
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <h1> <span style={{ backgroundColor: "whitesmoke", marginTop: "10vh", padding: "20px", width:'100%', display:'block', borderRadius:'50px'}}>WELCOME  &nbsp; <MdWavingHand /></span></h1>
      {/* Content inside the background container */}
      {/* You can add other components or text here */}
    </div>
  );
}

export default UserHome;