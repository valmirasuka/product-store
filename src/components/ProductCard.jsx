function ProductCard({ name, price, onAddToCart, isInCart }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>

      <p>Price: {price}€</p>

      <button disabled={isInCart} onClick={onAddToCart}>
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
