// update item quantity http://localhost:3000/item/update/2
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import basket from "../../pictures/basket.jpg";

function UpdateCartItem(props) {
  const [itemName, setItemName] = useState(""); // Name of the item (not used )
  const [itemPrice, setItemPrice] = useState(0.0); // Price of the item (not used
  const [itemQuantity, setItemQuantity] = useState(""); // Quantity of the item
  const params = useParams(""); // Extract URL parameters (not used
  const navigate = useNavigate();  // Set up navigation using the useNavigate hook
  const [items, setItems] = useState([]); // Initialize an empty array for items
  const [id, setId] = useState(); // Initialize a state variable for item ID

    // Function to handle updating the cart item
  function handleClick() {
    axios
      .patch("http://localhost:8080/item/update/" + params.id, {
        itemQuantity, // Include the updated item quantity in the request
        cart: { id: params.id }, // Include the cart ID 
      })

      .then((response) => {
        setItemQuantity("");  // Clear the item quantity state after successful update
        navigate(-1); // Navigate back (e.g., to the previous page)
      })

      .catch((err) => console.error(err)); // Log any errors to the console
  }

  return (
    <div style={{ backgroundColor: "#fcc72b", height: "900px" }}>
      <form>
        <br></br>
        <br></br>
        <div
          style={{ marginLeft: "10px" }}
          label
          htmlFor="itemQuantity"
          className="form-label"
        >
          <h2>Item Quantity:</h2>
          <input
            size="50"
            id="itemQuantity"
            className="form-control border-3 border-success rounded"
            style={{
              width: "250px",
              height: "37px",
              margin: "5px",
              marginLeft: "30px",
              marginTop: "30px",
            }}
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </div>

        <button
          className="btn btn-success"
          style={{ margin: "5px", marginLeft: "40px", color: "#fdc1da" }}
          onClick={handleClick}
          type="submit"
        >
          <strong>Submit</strong>
        </button>
        <br></br>
        <br></br>
        <div>
          <img
            className="text-center"
            style={{ marginLeft: "40px", width: "10%" }}
            src={basket}
          ></img>
        </div>
      </form>
    </div>
  );
}

export default UpdateCartItem;
