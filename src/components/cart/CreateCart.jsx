// create cart on the cart page - create new cart

import axios from "axios";
import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";

function CreateCart() {
  const cartList = []; // An array to store cart components
  const [carts, setCarts] = useState([]);
  const [cart, setCart] = useState("{}"); // State variable for the current cart (initialized as an empty object)
  const [buyer, setBuyer] = useState("");
  const [filter, setFilter] = useState("");// State variable for filtering carts based on buyer names
  let count = 0; // Keeps track of the item count for each cart

    // Fetch cart data from the server
  function getCarts() {
    axios
      .get("http://localhost:8080/cart/get")
      .then((response) => {
        setCarts(response.data);
      })
      .catch(console.log());
  }
  useEffect(() => {
    getCarts();
  }, []); // Run this effect once when the component mounts

    // Loop through each cart and create CartStructure components
  for (const cart of carts) {
        if (filter && !cart.buyer.toLowerCase().includes(filter.toLowerCase()))
      continue;  // Skip carts that don't match the filter

      count = cart.items.length; // Calculate the item count for this cart
    cartList.push(
      <CartStructure id={cart.id} buyer={cart.buyer} itemCount={count} />
      ); // Add a CartStructure component to the list
  }
  
  // Handle button click to create a new cart
  function handleclick() {
    if (!buyer) alert("Please enter customer name");
    else {
      axios
        .post("http://localhost:8080/cart/create", { buyer })
        .then((response) => {
          getCarts(); // Refresh the cart list
          setBuyer(""); // Reset the buyer input field
          console.log(buyer); // Log the buyer's name (for debugging)
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <div
      style={{ width: "100%", height: "1000px" }}
    >
      <div
        id="cartCreate"
        className="card-body "
        style={{ width: "40%", border: "show ", borderColor: "black" }}
      >
        <div className="card">
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
                display: "inline",
              }}
              type="text"
              value={buyer}
              onChange={(e) => {
                setBuyer(e.target.value);
                console.log(e.target.value);
              }}
            />
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
      </div>


      <div
        id="cartSearch"
        className="card-body"
        style={{
          width: "20%",
          padding: "20px",
          border: "show ",
          borderColor: "black",
        }}
      >
        <div className="card">
          <div
            style={{ marginLeft: "28px" }}
            label
            htmlFor="buyer"
            className="form-label"
          >
            <strong>Cart Search</strong>
            <input
              size="50"
              id="filter"
              className="form-control border-3 border-success"
              style={{
                width: "250px",
                height: "37px",
                margin: "5px",
                marginLeft: "20px",
                marginTop: "30px",
              }}
              type="text"
              placeholder="Enter customer name"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
        </div>
      </div>


      <h3 style={{ marginLeft: "10px" }}>
        <u>List of Carts</u>
      </h3>
      <div style={{ columnCount: "2" }}>
        <div style={{ width: "80%" }}> {cartList}</div>
      </div>
    </div>
  );
}
export default CreateCart;