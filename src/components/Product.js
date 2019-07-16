import React from "react";

const Product = ({ producto }) => {
  return (
    <div>
      <h1>{producto.name}</h1>
      <p>Price: ${producto.price}</p>
    </div>
  );
};

export default Product;
