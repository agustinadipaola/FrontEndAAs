// form to create random item

import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DisplayStockItems from "./DisplayStockItems";
import { Button } from "react-bootstrap";

function AddItem() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0.0);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [cartId, setCartId] = useState();
  const [image, setImage] = useState("");

  const params = useParams(""); // Retrieve parameters from the URL (e.g., cart ID) using React Router's useParams hook
  const navigate = useNavigate(); // Initialize the navigation function from React Router

  function handleClick() {}
  return (
    <div>
      <form
        className="card"
        style={{ width: "50%", position: "center", margin: "20px" }}
        onSubmit={(e) => {
          e.preventDefault(); // Prevent the default form submission behavior
          setCartId(params.id); // Set the cart ID based on the URL parameter
          // Make an HTTP POST request to create a new item

          axios
            .post("http://localhost:8080/item/create", {
              itemName,
              itemPrice,
              itemQuantity,
              cart: params.id, // Include the cart ID in the request
              image,
            })

            .then((response) => {
              // Reset input fields and reload the page after successful creation

              setItemName("");
              setItemPrice("");
              setItemQuantity("");
              setImage("");
              window.location.reload();
            })

            .catch((err) => console.error(err)); // Log any errors to the console
        }}
      >
        <strong>ITEM NAME: </strong>
        <input
          type="text"
          className="form-control"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <br />
        <strong>PRICE: </strong>
        <input
          type="number"
          className="form-control"
          placeholder="Price in £"
          defaultValue="0.00"
          min="0"
          step="0.01"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <br />
        <strong> QUANTITY:</strong>
        <input
          type="number"
          className="form-control"
          min="0"
          placeholder="Please enter quantity"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        />
        <div>
          <br />
<strong> IMAGE:</strong>
          <input
            id="propertyUploadImages"
            name="uploadimages"
            className="form-control"
            type="text"
            placeholder="Paste your URL here"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <br />
        <Button
          variant="dark"
          style={{ fontFamily: "roboto, sans-serif" }}
          id="itemSubmit"
          type="submit"
        >
          Submit
        </Button>
      </form>

      <DisplayStockItems />
    </div>
  );
}

export default AddItem;
