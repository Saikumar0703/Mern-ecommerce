import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className='custCard'>
        <h1 className='text-dark'>Welcome to Our Store</h1>
        <p>Find the best products tailored just for you!</p>
        <button className="hero-btn">Shop Now</button>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="categories">
        <h2>Featured Categories</h2>
        <div className="category-list">
          <div className="category-card">Electronics</div>
          <div className="category-card">Fashion</div>
          <div className="category-card">Home Decor</div>
          <div className="category-card">Sports</div>
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
      </section>
    </div>
  );
}

export default Home;
