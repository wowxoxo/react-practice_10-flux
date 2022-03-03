import { EventEmitter } from "events";
import CartAPI from "../api/CartAPI";
import constants from "../components/constants/constants";
import { register } from "../dispatchers/Dispatcher";

const CHANGE_EVENT = "change";

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCart() {
    return CartAPI.cartItems;
  },

  getCatalog() {
    return CartAPI.getCatalog();
  },

  getCartTotals() {
    return CartAPI.cartTotals();
  },

  dispatcherIndex: register(function (action) {
    switch (action.actionType) {
      case constants.ADD_ITEM:
        CartAPI.addItem(action.item);
        break;
      case constants.REMOVE_ITEM:
        CartAPI.removeItem(action.item);
        break;
      case constants.INCREASE_ITEM:
        CartAPI.increaseItem(action.item);
        break;
      case constants.DECREASE_ITEM:
        CartAPI.decreaseItem(action.item);
        break;
    }
    AppStore.emitChange();
  })
});

export default AppStore;
