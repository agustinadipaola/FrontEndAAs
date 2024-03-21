// display of the carts

import { useNavigate } from "react-router";
import axios from "axios";
import CartLogo from "../../pictures/shoppingCart.webp";
import userLogo from "../../pictures/user.jpg";
import "bootstrap/dist/css/bootstrap.css";


function CartStructure(props) {
  const navigate = useNavigate(); // Initialize the navigation function
  let disabledStatus = true; // Initialize a boolean variable
    // Check if itemCount is zero; if so, set disabledStatus to false

  if (!props.itemCount) disabledStatus = false;

  // Function to delete the cart
  function deleteCart() {
    axios.delete("http://localhost:8080/cart/delete/" + props.id); // Send a DELETE request
    window.location.reload(); // Reload the page after deletion
  }

  return (
    <div>
      <div
        className="d-inline-flex "
        style={{ maxWidth: "70%", margin: "40px" }}
      >
        <div className="card">
          <div className="card-body"></div>

          <h3 style={{ marginLeft: "10px" }}>
            Cart: {props.id}
            <></> <img style={{ width: "7%" }} src={CartLogo}></img>{" "}
            <p className="numberCircle" style={{ display: "inline" }}>
              {props.itemCount}
            </p>{" "}
            <></> &nbsp; <img style={{ width: "5%" }} src={userLogo}></img>{" "}
            {props.buyer}
          </h3>

          <div className="card-text" style={{ padding: "10px" }}>
            <button
              id="btn-addItem"
              className="btn btn-success"
              style={{ marginLeft: "10px", padding: "5px", color: "#fdc1da" }}
              onClick={() => navigate("/item/" + props.id)}
            >
              <strong>Add Items</strong>
            </button>
            <button
              className="btn btn-success"
              style={{
                marginLeft: "10px",
                padding: "5px",
                paddingBottom: "5px",
                color: "#fdc1da",
              }}
              onClick={() => navigate("/cart/get/" + props.id)}
            >
              <strong>Select</strong>
            </button>
            <button
              disabled={disabledStatus}
              className="btn btn-success"
              style={{ marginLeft: "10px", padding: "5px", color: "#fdc1da" }}
              onClick={() => {
                deleteCart();
              }}
            >
              <strong>Delete Cart</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartStructure;