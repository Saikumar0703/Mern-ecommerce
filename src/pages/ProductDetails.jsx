import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
   const { id } = useParams;
   const { product, setProduct} = useState(null);
   
   useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data))
   },[id]);

   if (!product) return <p>Loading...</p>;
   
   
    return(
        <div className="product-details">
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price : ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;