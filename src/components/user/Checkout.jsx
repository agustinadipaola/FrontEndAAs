import "bootstrap/dist/css/bootstrap.css";
import background from "../../pictures/ShoppingBackground.png";
import { LuHeartHandshake } from "react-icons/lu";

function Checkout() {
  return (
    <div
      style={{
        display: "flex", // Enable flex display
        flexDirection: "column", // Stack children vertically
        justifyContent: "flex-start", // C Align content to the top
        alignItems: "center", // Center content vertically
        height: "100vh", // Full viewport height
        background: `url(${background})`, // Background image
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
     <div>
        {" "}
        <span
          style={{
            backgroundColor: "whitesmoke",
            marginTop: "10vh",
            padding: "50px",
            width: "100%",
            display: "block",
            borderRadius: "50px",
          }}
        >
         <h1>THANK YOU! &nbsp; <LuHeartHandshake size={60} />
 </h1> 
         <h4>Your order was completed successfully</h4>
        </span>
      </div>
   
    </div>
  );
}

export default Checkout;