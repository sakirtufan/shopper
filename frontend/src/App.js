import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              shopper
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Einkaufswagen
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Einloggen</Link>
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen}></Route>
        </main>
        <footer className="row center">Alle Rechte vorbehalten</footer>
      </div>
    </Router>
  );
}

export default App;
