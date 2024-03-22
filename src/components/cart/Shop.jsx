// autorefresh

import axios from "axios";
import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";

function Shop() {
  const [cart, setCart] = useState("{}"); // State variable for cart data (initialized as an empty object)

  useEffect(() => {
    // Empty useEffect hook (no side effects specified)
  }); // Run this effect once when the component mounts

  // Fetch cart data from the server
  function getCart() {
    axios
      .get("http://localhost:8080/cart/get")
      .then((response) => {
        setCart(response.data); // Set the cart data in the state
      })
      .catch(console.log()); // Log any errors to the console
  }
  // Render the CartStructure component with the cart ID
  <CartStructure id={cart.id} />; //shoud this be in the return??

  // Create a new cart via an HTTP POST request
  axios
    .post("http://localhost:8080/cart/create")
    .then((response) => {
      getCart(); // Refresh the cart data
      console.log(); // Log (empty) for debugging purposes
    })
    .catch((err) => console.error(err)); // Log any errors to the console

  return <div>{cart}</div>; // Display the cart data within a div element
}

export default Shop;
