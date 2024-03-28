import PropTypes from "prop-types";

import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import UpdateCartItem from "./UpdateCartItem";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useParams } from "react-router-dom";
import lowStock from "../../pictures/low-stock.png";
import { Card } from "react-bootstrap";
import onSale from "../../pictures/onSale.png";
import { Button } from "react-bootstrap";

function ItemStructure(props) {
  const navigate = useNavigate(); // Set up navigation using the useNavigate hook
  const [itemQuantity, setItemQuantity] = useState(); // Quantity of the item
  const [item, setItem] = useState(); // Details of the item
  const params = useParams(""); // Extract URL parameters (not used )

  let itemTotal = props.price * props.quantity; // Calculate the total cost of the item

  // Control visibility based on item quantity
  let visiblity = false;
  function LowStock() {
    if (props.quantity < 10) {
      return <img src={lowStock} style={{ width: "10%" }} />;
    }
  }

  // Function to delete an item
  function deleteItem() {
    axios.delete("http://localhost:8080/item/delete/" + props.id);
    window.location.reload(); // Reload the page after deletion
  }

  if (!props.quantity) {
    visiblity = "none"; // Hide the component if quantity is not provided
  }
  return (
    // Updated styles for the container div
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
      <Card
        key={props.id}
        style={{ textAlign: "center", margin: "0.5rem", flex: "0 1 calc(25% - 1rem)", fontFamily: "roboto" }} // Adjusted styles for Card
      >
        {/* <div
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                transform: "scale(2)",
              }}
            /> */}
        {/* <img
          src={onSale}
          alt="Watermark"
          style={{ opacity: 0.65, width: 50 }}
        /> */}

        <img src={props.image} className="item-images" alt="itemImage" />
        <br />
        <h4>{props.name}</h4>
        
        
          <h6> £ {parseFloat(props.price).toFixed(2)}</h6>
          <div>Quantity: 1</div>
          <p style={{ display: visiblity }} >
          {" "}
          <div>Items left: {props.quantity}</div>
        

        <Button
          variant="dark"
          style={{ fontFamily: "roboto, sans-serif" }}
          onClick={() => navigate("/item/update/" + props.id)}
        >
          Update
        </Button>
        <br />
        <Button
          variant="dark"
          style={{ fontFamily: "roboto, sans-serif" }}
          onClick={() => {
            deleteItem();
          }}
        >
          Delete
        </Button>
        </p>
      </Card>
    </div>
  );
}

export default ItemStructure;