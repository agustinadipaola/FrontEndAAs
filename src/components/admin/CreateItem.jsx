import DisplayStockItems from "../item/DisplayStockItems";
import FormCreateItem from "./FormCreateItem";

function CreateItem() {
 
  return (
    <div>
      <FormCreateItem/>

      <DisplayStockItems />
    </div>
  );
}

export default CreateItem;
