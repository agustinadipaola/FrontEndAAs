import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";


function UserItemStructure(props) {
  const navigate = useNavigate();
  const [itemQuantity, setItemQuantity] = useState();
  const [item, setItem] = useState();

  let itemTotal = props.price * props.quantity;

  // let visibility = false;
  // function LowStock() {
  //   if (props.quantity < 10) {
  //     document.getElementById('ItemQuantity').style.backgroundColor = "Red";
  //   }
  // }
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
    axios.patch(`http://localhost:8080/item/add/${props.id}/1`)

      .then(response => {
      })

      .catch(err => console.error(err))
  };



  return (
    <Card>
  <img src={props.image} className="card-img-top" alt="itemImage" />
  <br/>
      <h5>{props.itemName}</h5>
      {/* <p style={{ display: visibility }}> */}
        <h6> £ {parseFloat(props.itemPrice).toFixed(2)}</h6>
        <div id="ItemQuantity">Items left: {props.itemQuantity}
        {/* {LowStock()} */}
        </div>
        <Button
        variant="dark"
        onClick={() => AddToCart()}
      >
        Add to Cart
      </Button> 
    </Card>
  );


UserItemStructure.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};}

export default UserItemStructure;