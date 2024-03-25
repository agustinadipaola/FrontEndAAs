import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

function AdminItemStructure(props) {
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

  function deleteItem(id) {
    axios.delete(`http://localhost:8080/item/delete/${id}`)
      .then(() => window.location.reload())
      .catch(error => console.error('There was an error!', error));
  }

  // if (!props.quantity) {
  //   visibility = "none";
  // }

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
        onClick={() => navigate(`/item/update/${props.id}`)}
      >
        Update
      </Button>
      <br />
      <Button
        variant="dark"
        onClick={() => deleteItem(props.id)}
      >
        Delete
      </Button>
    </Card>
  );
}

AdminItemStructure.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

export default AdminItemStructure;
