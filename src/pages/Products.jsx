import { useState, useEffect } from 'react';
import { fetchProducts } from '../Services/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
