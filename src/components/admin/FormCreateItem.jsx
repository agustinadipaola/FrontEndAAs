import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function FormCreateItem() {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [image, setImage] = useState("");
    
    const navigate = useNavigate();


    function getItems() {
        axios
          .get("http://localhost:8080/item/get")
          .then((response) => {
            console.log("http://localhost:8080/item/get", response);
          })
          .catch((err) => console.error(err));
      }

      useEffect(() => getItems());

  const handleSubmit = (event) => {
    event.preventDefault();

    // update

    axios
      .post("http://localhost:8080/item/create", {
        itemName,
        itemPrice,
        itemQuantity,
        image,
      
    }
      )
      
      .then((response) => {
        setItemName("");
        setItemPrice("");
        setItemQuantity("");
        setImage("");
        window.location.reload();

      })
      .catch((error) => console.error(error));
  };

    return ( 
<div>
      <form onSubmit={handleSubmit}>
        <h3>CREATE YOUR ITEMS</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        ></input>
        <br />
        <input
          type="number"
          className="form-control"
          defaultValue="0.00"
          min="0"
          step="0.01"
          placeholder="Price in £"
          value={itemPrice}
          onChange={(event) => setItemPrice(event.target.value)}
        ></input>
        <br />
        <input
          type="number"
          className="form-control"
          min="0"
          placeholder="Please enter quantity"
          value={itemQuantity}
          onChange={(event) => setItemQuantity(event.target.value)}
        ></input>
        <br />
        <input
          id="propertyUploadImages"
          name="uploadimages"
          className="form-control"
          type="text"
          placeholder="Paste your URL here"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <button class="my-button-create">
          <strong>CREATE</strong>
        </button>
        
      </form>
      </div>
     );
}

export default FormCreateItem;