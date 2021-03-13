import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import data from "./data";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              shopper
            </a>
          </div>
          <div>
            <a href="/cart">Wagen</a>
            <a href="/signin">Einloggen</a>
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen}/>
          <div>
            <div className="row center">
              {data.products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        </main>
        <footer className="row center">Alle Rechte vorbehalten</footer>
      </div>
    </Router>
  );
}

export default App;
