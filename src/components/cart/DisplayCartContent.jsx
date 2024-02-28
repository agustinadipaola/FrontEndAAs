import axios from "axios";
import { useParams } from "react-router-dom";
import ItemStructure from "../item/ItemStructure";
import { useEffect, useState } from "react";


function DisplayCartContent() {
    const params = useParams("");
    const itemList = []
    const [items, setItems] = useState([]);
    let itemTotal=0;
    let cartTotal=0;

    function getCartItems() {
        axios.get("http://localhost:8080/cart/get/" + params.id)
            .then((response) => { setItems(response.data.items) })
            .catch(console.log())
            console.log( items);
    }

    for (const item of items) {
        itemList.push(<ItemStructure
            id={item.id}
            name={item.itemName}
            price={item.itemPrice}
            quantity={item.itemQuantity}
           
        />

        )

    }
    for (const item of items) {
       cartTotal=cartTotal+ item.itemPrice*item.itemQuantity
       
    }
    
    // console.log(cartTotal);
    // <ItemStructure cartTotal={cartTotal}/>

    useEffect(() => { getCartItems() }, [])
    return (
        <div>
            <h3>Cart Contents</h3>
            <div>
                
                {itemList}
                <h4>Total to pay:</h4>
                {cartTotal}
            </div>

        </div>
    );
}

export default DisplayCartContent;