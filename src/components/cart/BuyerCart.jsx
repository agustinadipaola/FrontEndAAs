//  where we create the cart for the buyer shopping page -where you add the name
import axios from "axios";
import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";
import { useParams } from "react-router-dom";

function BuyerCart() {
  const cartList = [];
  const [carts, setCarts] = useState([]); // State variable for cart data (initialized as an empty array)
  const [cart, setCart] = useState(); // State variable for a single cart (initialized as undefined)
  const [buyer, setBuyer] = useState("");// State variable for the customer's name

  function handleclick() {

    if (!buyer) alert("Please enter customer name"); // Show an alert if the customer name is not provided
    else {
      axios
        .post("http://localhost:8080/cart/create", { buyer })
        .then((response) => {
          console.log("handleclick:", response.data); // Log the response data
          setCart(response.data); // Update the cart state with the received data
          console.log(response.data); // Clear the customer name input field
          setBuyer("");// Clear the customer name input field
        })

        .catch((err) => console.error(err));  // Handle any errors
    }
  }

  return (
    <div style={{ backgroundColor: "#fcc72b", width: "100%", height: "900px" }}>
      <div style={{ marginLeft: "30px" }}>
        <div
          id="cartCreate"
          className="card-body "
          style={{
            backgroundColor: "#fcc72b",
            width: "40%",
            border: "show ",
            borderColor: "black",
            marginLeft: "10px",
          }}
        >
          <h3>Start shopping by creating a cart</h3>
        </div>
        <div className="card" style={{ width: "50%", marginLeft: "10px" }}>
          <div
            style={{ marginLeft: "28px" }}
            label
            htmlFor="buyer"
            className="form-label"
          >
            <strong>Customer Name</strong>
            <input
              size="50"
              id="buyer"
              className="form-control border-3 border-success rounded"
              style={{
                width: "250px",
                height: "37px",
                margin: "5px",
                marginLeft: "20px",
                marginTop: "30px",
              }}
              type="text"
              value={buyer}
              onChange={(e) => {
                setBuyer(e.target.value);
                console.log(e.target.value);
              }}
              required
            />
          </div>

          <button
            className="btn btn-success"
            style={{
              width: "200px",
              height: "40px",
              margin: "5px",
              marginLeft: "5px",
              marginTop: "15px",
              color: "#fdc1da",
            }}
            type="button"
            onClick={handleclick}
          >
            <strong>Create New Cart</strong>
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
      <h3 style={{ marginLeft: "10px" }}>
        <u>Shopping Cart</u>
      </h3>
      <div style={{ backgroundColor: "#fcc72b", width: "100%" }}>
        {/* render CartStructure with the ID of the cart, information about the buuyer and the array of items in the cart */}
        {cart && (
          <CartStructure id={cart.id} buyer={cart.buyer} items={cart.items} />
        )}
      </div>
    </div>
  );
}

export default BuyerCart;
