import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

/* Initial State and Action object
// Action Object: {
    type: "DEFINES_ACTION", // ADD_ITEM, DELETE_ITEM
    payload: "data"; // primitive / non-primitive data types
}
*/
const initialState = {
  numOfItems: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };
    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    default:
      return state;
  }
};
