import { EventEmitter } from "events";
import constants from "../components/constants/constants";
import { register } from "../dispatchers/Dispatcher";

const CHANGE_EVENT = "change";

const _catalog = [];

for (let i = 1; i < 9; i++) {
  _catalog.push({
    id: "Product" + i,
    title: "Product #" + i,
    summary: "A great Product",
    description:
      "Such a great product man! Don't overthink! Just get it right now!",
    cost: i
  });
}

const _cartItems = [];

const _removeItem = (item) => {
  return _cartItems.splice(
    _cartItems.findIndex((i) => i === item),
    1
  );
};

const _findCartItem = (item) => {
  return _cartItems.find((cartItem) => cartItem.id === item.id);
};

const _increaseItem = (item) => item.qty++;

const _decreaseItem = (item) => {
  // item.qty--
  // if (item.qty === 0) {
  //   _removeItem(item)
  // }
  if (item.qty === 1) {
    _removeItem(item);
  } else {
    item.qty--;
  }
};

const _addItem = (item) => {
  const cartItem = _findCartItem(item);
  if (!cartItem) {
    _cartItems.push(Object.assign({ qty: 1 }, item));
  } else {
    _increaseItem(cartItem);
  }
};

const _cartTotals = () => {
  let qty = 0;
  let total = 0;
  _cartItems.forEach((cartItem) => {
    qty += cartItem.qty;
    total += cartItem.qty * cartItem.cost;
  });
  return { qty, total };
};

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emitChange(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  // add public methods for cart, catalog, totals

  getCart() {
    return _cartItems();
  },

  getCatalog() {
    return _catalog.map((item) => {
      return Object.assign({}, item, _findCartItem(item));
    });
  },

  getCartTotals() {
    return _cartTotals();
  },

  dispatcherIndex: register(function (action) {
    switch (action.actionType) {
      case constants.ADD_ITEM:
        _addItem(action.item);
        break;
      case constants.REMOVE_ITEM:
        _removeItem(action.item);
        break;
      case constants.INCREASE_ITEM:
        _increaseItem(action.item);
        break;
      case constants.DECREASE_ITEM:
        _decreaseItem(action.item);
        break;
    }
    AppStore.emitChange();
  })
});

export default AppStore;
