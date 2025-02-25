import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
