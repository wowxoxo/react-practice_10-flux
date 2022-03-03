const CartAPI = {
  catalog: [],
  cartItems: [],

  removeItem(item) {
    this.cartItems.splice(
      this.cartItems.findIndex((i) => i === item),
      1
    );
  },

  findCartItem(item) {
    return this.cartItems.find((cartItem) => cartItem.id === item.id);
  },

  increaseItem(item) {
    item.qty++;
  },

  decreaseItem(item) {
    if (item.qty === 1) {
      this.removeItem(item);
    } else {
      item.qty--;
    }
  },

  addItem(item) {
    const cartItem = this.findCartItem(item);
    if (!cartItem) {
      this.cartItems.push(Object.assign({ qty: 1 }, item));
    } else {
      this.increaseItem(cartItem);
    }
  },

  cartTotals() {
    let qty = 0;
    let total = 0;
    this.cartItems.forEach((cartItem) => {
      qty += cartItem.qty;
      total += cartItem.qty * cartItem.cost;
    });
    return { qty, total };
  },

  getCatalog() {
    return this.catalog.map((item) => {
      return Object.assign({}, item, this.findCartItem(item));
    });
  },

  init() {
    for (let i = 1; i < 9; i++) {
      this.catalog.push({
        id: "Product" + i,
        title: "Product #" + i,
        summary: "A great Product",
        description:
          "Such a great product man! Don't overthink! Just get it right now!",
        cost: i
      });
    }
  }
};

CartAPI.init();
export default CartAPI;
