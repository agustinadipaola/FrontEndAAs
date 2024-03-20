// form to create random item

import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DisplayStockItems from "./DisplayStockItems";

function AddItem() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0.0);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [cartId, setCartId] = useState();
  const params = useParams(""); // Retrieve parameters from the URL (e.g., cart ID) using React Router's useParams hook
  const navigate = useNavigate(); // Initialize the navigation function from React Router
  const [image, setImage] = useState("");


  return (
    <div
      style={{ backgroundColor: "#fcc72b", padding: "50px", height: "1800px" }}
    >
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

            .catch((err) => console.error(err));  // Log any errors to the console
        }}
      >
        <div
          style={{ marginLeft: "28px" }}
          label
          htmlFor="itemName"
          className="form-label"
        >
          <strong>Item Name</strong>
          <input
            size="50"
            id="itemName"
            className="form-control border border-success rounded"
            style={{
              width: "250px",
              height: "37px",
              margin: "5px",
              marginLeft: "20px",
              marginTop: "30px",
            }}
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div
          style={{ marginLeft: "35px" }}
          label
          htmlFor="itemPrice"
          className="form-label"
        >
          <strong>Item Price</strong>
          <input
            size="50"
            id="itemPrice"
            className="form-control border border-success rounded"
            style={{
              width: "250px",
              height: "37px",
              margin: "5px",
              marginLeft: "20px",
            }}
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>

        <div
          style={{ marginLeft: "10px" }}
          label
          htmlFor="itemQuantity"
          className="form-label"
        >
          <strong>Item Quantity</strong>
          <input
            size="50"
            id="itemQuantity"
            className="form-control border border-success rounded"
            style={{
              width: "250px",
              height: "37px",
              margin: "5px",
              marginLeft: "20px",
            }}
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            contentEditable
          />
        </div>
        <div>
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

        <button
          id="itemSubmit"
          style={{ margin: "5px", width: "150px", color: "#fdc1da" }}
          className="btn btn-success"
          type="submit"
        >
          <strong>Submit</strong>
        </button>
      </form>


      <DisplayStockItems />

    </div>
  );
}

export default AddItem;
