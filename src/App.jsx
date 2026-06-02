import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 800,
    },
    {
      id: 2,
      name: "Mouse",
      price: 20,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 50,
    },
    {
      id: 4,
      name: "Headphones",
      price: 120,
    },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((product) => id !== product.id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="app">
      <Header
        title="Product Store"
        subtitle="Practice React with a simple shopping cart"
      />

      <h2>Products</h2>

      <div className="products-list">
        {products.map((product) => {
          const isInCart = cart.some(
            (productInCart) => productInCart.id === product.id,
          );

          return (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              onAddToCart={() => handleAddToCart(product)}
              isInCart={isInCart}
            />
          );
        })}
      </div>

      <div className="cart">
        <Cart
          cart={cart}
          onRemoveFromCart={(id) => handleRemoveFromCart(id)}
          onClearCart={() => handleClearCart()}
        />
      </div>
    </div>
  );
}

export default App;
