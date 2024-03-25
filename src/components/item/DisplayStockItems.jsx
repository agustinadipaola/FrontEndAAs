import axios from "axios";
import { useEffect, useState } from "react";
import AdminItemStructure from "./AdminItemStructure";

function DisplayStockItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/item/get")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-2" key={index}>
             <div className="card h-100"> 
            <AdminItemStructure {...item} /> {/* Rendering the AdminItemStructure component for each item, spreading the item's properties as props */}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayStockItems;
