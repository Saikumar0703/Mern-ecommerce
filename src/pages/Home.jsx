import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="custCard">
          <h1 className="text-dark">Welcome to Our Store</h1>
          <p>Find the best products tailored just for you!</p>
          <Link to="/products">
            <button className="hero-btn">Shop Now</button>
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories">
        <h2>Featured Categories</h2>
        <div className="category-list">
          <Link to="/products?category=electronics" className="category-card">Electronics</Link>
          <Link to="/products?category=fashion" className="category-card">Fashion</Link>
          <Link to="/products?category=home-decor" className="category-card">Home Decor</Link>
          <Link to="/products?category=sports" className="category-card">Sports</Link>
        </div>
      </section>

      {/* Popular Products */}
      <section className="popular-products">
        <h2>Popular Products</h2>
        <div className="product-list">
          {/* Sample Product Cards */}
          <div className="product-card">
            <img src="path/to/image.jpg" alt="Product" />
            <h3>Product Name</h3>
            <p>$49.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="path/to/image.jpg" alt="Product" />
            <h3>Product Name</h3>
            <p>$59.99</p>
            <button>Add to Cart</button>
          </div>
          {/* Add more product cards as needed */}
        </div>
        <Link to="/cart">
          <button className="view-cart-btn">View Cart</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
