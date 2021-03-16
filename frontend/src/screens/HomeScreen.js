import React, { useEffect } from "react";
import Product from "../components/Product.jsx";
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productAction"

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector( state => state.productList );
  const { loading,error,products } = productList;

  useEffect(() => {
  dispatch(listProducts());
  }, []);
  
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
