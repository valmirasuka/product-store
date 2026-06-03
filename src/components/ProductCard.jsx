function ProductCard({ title, price, image, onAddToCart, isInCart }) {
  return (
    <div className="product-card">
      <img src={image} className="product-card-img" />

      <h3>{title}</h3>

      <p>Price: {price}€</p>

      <button disabled={isInCart} onClick={onAddToCart}>
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
