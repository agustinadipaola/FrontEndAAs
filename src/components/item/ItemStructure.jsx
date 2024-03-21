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
    // Items display of the cart (like checkout)
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card
        key={props.id}
        className="col-sm-4 col-md-3 col-lg-1 m-3"
        style={{ textAlign: "center" }}
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
        <p style={{ display: visiblity }} className="col">
          {" "}
          <h6> £ {parseFloat(props.price).toFixed(2)}</h6>
          <div>Items left: {props.quantity}</div>
        </p>

        <Button
          variant="dark"
          style={{ fontFamily: "bowlByOne, sans-serif" }}
          onClick={() => navigate("/item/update/" + props.id)}
        >
          Update Quantity
        </Button>
        <br />
        <Button
          variant="dark"
          style={{ fontFamily: "bowlByOne, sans-serif" }}
          onClick={() => {
            deleteItem();
          }}
        >
          Delete
        </Button>
      </Card>
    </div>
  );
}

export default ItemStructure;
