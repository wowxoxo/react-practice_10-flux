import { EventEmitter } from "events";
import constants from "../components/constants/constants";
import { register } from "../dispatchers/Dispatcher";

const CHANGE_EVENT = "change";

const _addItem = (item) => {};

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

  dispatcherIndex: register(function (action) {
    switch (action.actionType) {
      case constants.ADD_ITEM:
        _addItem(action.item);
        break;
    }
    AppStore.emitChange();
  })
});

export default AppStore;
