import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Catalog from "./components/catalog/Catalog";
import CatalogDetail from "./components/product/CatalogDetail";
import Template from "./components/Template";

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/cart" component={Cart} />
          <Route path="/item/:itemId" component={CatalogDetail} />
        </Switch>
      </Template>
    </BrowserRouter>

    // <Template>
    //   <Catalog />
    //   <Cart />
    // </Template>
  );
}

export default App;
