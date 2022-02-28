import { dispatch } from "../../dispatchers/Dispatcher";
import constants from "../constants/constants";

export default {
  addItem(item) {
    // console.log(item);
    dispatch({ actionType: constants.ADD_ITEM, item });
  },
  removeItem(item) {
    dispatch({ actionType: constants.REMOVE_ITEM, item });
  },
  increaseItem(item) {
    dispatch({ actionType: constants.INCREASE_ITEM, item });
  },
  decreaseItem(item) {
    dispatch({
      actionType: constants.DECREASE_ITEM,
      item
    });
  },
  clear() {
    dispatch({ actionType: constants.CLEAR });
  }
};
