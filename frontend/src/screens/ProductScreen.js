import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

export default function ProductScreen(props) {
  const product = data.products.find((product) => product._id === props.match.params.id);
  if (!product) {
    return <div> Produkt nicht gefunden</div>;
  }
  return (
    <div>
      <Link to="/">zurück zum Ergebnis</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Preis : {product.price} €</li>
            <li>
              Beschreibung:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Preis</div>
                  <div className="price">{product.price} €</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">Auf Lager</span>
                    ) : (
                      <span className="error">Nicht verfügbar</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">In den Einkaufswagen</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

