import React, { useState, useEffect } from "react";
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [] );

    return(
        <div className="product-listing">
          {
            products.map( product => (
                <ProductCard key={product.id} product={product}/>
            ))
          }
        </div>
    )
}

export default ProductListing;