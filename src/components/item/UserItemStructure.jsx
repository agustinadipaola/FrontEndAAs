import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import LogoSwal from "../../pictures/LogoSwal.png";
import background from "../../pictures/ShoppingBackground.png";

function UserItemStructure(props) {
  const navigate = useNavigate();
  const [itemQuantity, setItemQuantity] = useState();
  const [item, setItem] = useState();

  let itemTotal = props.price * props.quantity;


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
  function AddToCart() {
    Swal.fire({
      width:'15em',
      title: "Item added to cart!",
      background: "#f5f5f5",
      imageUrl: LogoSwal,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "Custom image",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`http://localhost:8080/item/add/${props.id}/1`)
          .then(response => {
           
          })
          .catch(err => {
            console.error(err);
            
          });
      }
    });
  }
  

  return (
    
    <Card >
  <img src={props.image} className="card-img-top" alt="itemImage" />
      <h6>{props.itemName}</h6>
      {/* <p style={{ display: visibility }}> */}
        <h4> <span class="a price-symbol">£</span>

{parseFloat(props.itemPrice).toFixed(2)}</h4>
        
        <Button
        variant="light" style={{ border: '1px solid #000' }}
        onClick={() => AddToCart()}
      >
        
         <strong> Add 
         </strong>
      </Button> 
    </Card>
  );


}

export default UserItemStructure;