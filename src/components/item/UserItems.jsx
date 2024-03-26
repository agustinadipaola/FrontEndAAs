import axios from "axios";
import { useEffect, useState } from "react";
import UserItemStructure from "./UserItemStructure";
import onsale from "../../pictures/onSale.png";

function UserItems() {
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
             {/* Conditionally render the banner based on the item's showBanner property */}
            {item.showBanner && (
              <div className="banner">
                <img src={onsale} alt="On Sale" />
              </div>
            )}
            <UserItemStructure {...item} /> {/* Rendering the AdminItemStructure component for each item, spreading the item's properties as props */}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserItems;