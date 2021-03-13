import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
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
        </main>
        <footer className="row center">Alle Rechte vorbehalten</footer>
      </div>
    </Router>
  );
}

export default App;
