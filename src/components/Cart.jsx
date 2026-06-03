function Cart({ cart, onRemoveFromCart, onClearCart }) {
  return (
    <>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cart.map((productCart) => {
          return (
            <div className="cart-item" key={productCart.id}>
              <p>
                {productCart.title} - {productCart.price}€
              </p>

              <button onClick={() => onRemoveFromCart(productCart.id)}>
                Remove
              </button>
            </div>
          );
        })
      )}

      <h2>
        Totali:{" "}
        {cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}€
      </h2>

      <button onClick={onClearCart}>Clear Cart</button>
    </>
  );
}

export default Cart;
