import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";
const Cart = () => {
  const state = useSelector((state) => state);
  console.log(state); // { numOfItems: 0 }
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cart Component</h1>
      <h2>No. of items in the cart: {state.numOfItems}</h2>
      <button onClick={() => dispatch(addItem())}>Add</button>
      {"    "}
      <button
        onClick={() => dispatch(deleteItem())}
        disabled={state.numOfItems <= 0 ? true : false}
      >
        Delete
      </button>
    </div>
  );
};

export default Cart;
