import Cart from "./components/cart/Cart";
import Catalog from "./components/catalog/Catalog";
import Template from "./components/Template";

function App() {
  return (
    <Template>
      <Catalog />
      <Cart />
    </Template>
  );
}

export default App;
