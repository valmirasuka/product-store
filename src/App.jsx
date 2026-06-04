import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";

const API_URL = "https://fakestoreapi.com";

function App() {
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(`${API_URL}/products`);

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      setError("Something went wrong.Try again", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

      {products.length === 0 ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>Products</h2>

          {loading ? (
            <p>Loading products...</p>
          ) : (
            <div className="products-list">
              {products.map((product) => {
                const isInCart = cart.some(
                  (productInCart) => productInCart.id === product.id,
                );

                return (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    onAddToCart={() => handleAddToCart(product)}
                    isInCart={isInCart}
                  />
                );
              })}
            </div>
          )}
        </>
      )}

      {cart.length !== 0 && (
        <div className="cart-section">
          <div className="cart">
            <Cart
              cart={cart}
              onRemoveFromCart={(id) => handleRemoveFromCart(id)}
              onClearCart={() => handleClearCart()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
