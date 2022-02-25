import Actions from "./components/actions/Actions";
import Cart from "./components/cart/Cart";
import Catalog from "./components/catalog/Catalog";
import Template from "./components/Template";

function App() {
  return (
    <Template>
      <h1 onClick={Actions.addItem.bind(null, "this is item")}>ddds</h1>
      <Catalog />
      <Cart />
    </Template>
  );
}

export default App;
