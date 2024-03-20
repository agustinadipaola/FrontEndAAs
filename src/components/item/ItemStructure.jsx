import PropTypes from "prop-types";

import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import UpdateCartItem from "./UpdateCartItem";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useParams } from "react-router-dom";

function ItemStructure(props) {
  
  const navigate = useNavigate();   // Set up navigation using the useNavigate hook
  const [itemQuantity, setItemQuantity] = useState();  // Quantity of the item
  const [item, setItem] = useState(); // Details of the item
  const params = useParams("");   // Extract URL parameters (not used )
  
  
  let itemTotal = props.price * props.quantity;   // Calculate the total cost of the item

  // Control visibility based on item quantity
  let visiblity = false;
  
  // Function to delete an item
  function deleteItem() {
    axios.delete("http://localhost:8080/item/delete/" + props.id);
    window.location.reload(); // Reload the page after deletion
  }

  if (!props.quantity) {
    visiblity = "none";  // Hide the component if quantity is not provided
  }
  return (
    // Items display of the cart (like checkout)
    <div style={{ width: "30%" }}>
      <h5>
        <u>Items: {props.id}</u>
      </h5>

      <div className="card" style={{ Width: "30%" }}>
      <img src={props.image} alt="shopping cart product" />       

        <p className="col"> ID: {props.id} </p>
        <p className="col"> ITEM : {props.name} </p>
        <p className="col"> PRICE: £{props.price} </p>
         <p style={{ display: visiblity }} className="col">
          {" "}
          QUANTITY: {props.quantity}{" "}
        </p>
        <p style={{ display: visiblity }} className="col">
          {" "}
          <strong> Total: £{itemTotal.toFixed(2)}</strong>{" "}
        </p>
      </div>

      <button
        className="btn btn-success"
        style={{
          display: visiblity,
          width: "200px",
          height: "50px",
          margin: "5px",
          padding: "5px",
          color: "#fdc1da",
        }}
        onClick={() => navigate("/item/update/" + props.id)}
      >
        <strong>Update Quantity</strong>
      </button>

      <button
        className="btn btn-success"
        style={{
          width: "200px",
          height: "50px",
          margin: "5px",
          padding: "5px",
          color: "#fdc1da",
        }}
        onClick={() => {
          deleteItem();
        }}
      >
        <strong>Delete</strong>
      </button>
    </div>
  );
}

export default ItemStructure;
