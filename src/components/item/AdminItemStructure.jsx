import { useNavigate } from "react-router";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function AdminItemStructure(props) {
  const navigate = useNavigate();

  let itemTotal = props.price * props.quantity;

  // let visibility = false;
  // function LowStock() {
  //   if (props.quantity < 10) {
  //     document.getElementById('ItemQuantity').style.backgroundColor = "Red";
  //   }
  // }

  function deleteItem(id) {
    Swal.fire({
      title: "Are you sure you want to delete this item?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#67C9A6" ,
      cancelButtonColor: "#FF6962",

      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
          axios.delete(`http://localhost:8080/item/delete/${id}`)

          .then(() => {
            Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
              
            );
            window.location.reload();

        })
        .catch(error => console.error('There was an error!', error));

      }
      
    });


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
        style={{ fontFamily: "roboto, sans-serif" }}

        onClick={() => navigate(`/item/update/${props.id}`)}
      >
        Update
      </Button>
      <br />
      <Button
        variant="dark"
        style={{ fontFamily: "roboto, sans-serif" }}

        onClick={() => deleteItem(props.id)}
      >
        Delete
      </Button>
    </Card>
  );
}

// AdminItemStructure.propTypes = {
//   id: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   quantity: PropTypes.number.isRequired
// };

export default AdminItemStructure;