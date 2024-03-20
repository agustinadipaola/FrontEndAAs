//  where you are inside the cart you add and item and automatically put in the cart



import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DisplayStockItems from "../item/DisplayStockItems";


function AddItemToCart() {
    // State variables for item information
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0.0);
  const [itemQuantity, setItemQuantity] = useState(0);
  // Access route parameters (e.g., item ID)
  const params = useParams("");
  // Initialize the navigation function
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundColor: "#fcc72b", padding: "50px", height: "1800px" }}
    >
      <form
        className="card"
        style={{ width: "50%", position: "center", margin: "20px" }}
        onSubmit={(e) => {
          e.preventDefault(); // Prevent the default form submission behavior

          // Make an HTTP POST request to create an item
          axios
            .post("http://localhost:8080/item/create", {
              itemName,
              itemPrice,
              itemQuantity,
              cart: { id: params.id },
            })
             // Clear input fields after successful item creation
            .then((response) => {
              setItemName("");
              setItemPrice("");
              setItemQuantity("");
              // Navigate to the cart page
              navigate("/cart/get/" + params.id);
            })

            .catch((err) => console.error(err));
        }}
      >
        <div>
          {/* Input field for item name */}
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <div
                style={{ marginLeft: "10px" }}
                label
                htmlFor="itemName"
                className="form-label"
              >
                <strong>Item Name</strong>
              </div>
              <div class="col-auto">
                <input
                  size="50"
                  id="itemName"
                  className="form-control border border-success rounded"
                  style={{
                    width: "250px",
                    height: "37px",
                    margin: "5px",
                    marginLeft: "20px",
                  }}
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          
          {/* Input field for item price */}
          <div
            style={{ marginLeft: "10px" }}
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
                marginLeft: "30px",
              }}
              type="number"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              required
            />
          </div>

          {/* Input field for item quantity */}
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
              style={{ width: "250px", height: "37px", margin: "5px" }}
              type="number"
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          style={{ margin: "5px", width: "150px", color: "#fdc1da" }}
          className="btn btn-success"
          type="submit"
        >
          <strong>Submit</strong>
        </button>
      </form>
      <br></br>
      <h3>Current Stock Items</h3>
      <DisplayStockItems />
    </div>
  );
}

export default AddItemToCart;
