import axios from "axios";
import { useEffect, useState } from "react";
import ItemStructure from "./ItemStructure";
import { Card } from "react-bootstrap";

function DisplayStockItems() {
  const [items, setItems] = useState([]); // Initialize a state variable 'items' with an empty array
  const itemList = []; // Create an empty array to store the list of items

  function getItems() {
    // Function to fetch items from the server
    axios
      .get("http://localhost:8080/item/get") // Make an HTTP GET request to the specified URL

      .then((response) => {
        setItems(response.data); // Update the 'items' state with the data received from the server
        console.log("response.data: ", response.data); // Log the received data to the console
      })

      .catch(console.log()); // Log any errors to the console
    console.log("items1: ", items); // Log the current value of 'items'
  }

  // Loop through each item and create an ItemStructure component
  for (const item of items) {
    itemList.push(
      <ItemStructure
        id={item.id}
        name={item.itemName}
        price={item.itemPrice}
        quantity={item.itemQuantity}
        image={item.image}
      />
    );
  }
  // Use the useEffect hook to fetch items when the component mounts
  useEffect(() => {
    getItems();
  }, []);

  return <div>{itemList}</div>;
}

export default DisplayStockItems;
