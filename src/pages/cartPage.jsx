import { useCart } from "../context/cartProvider";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
return (
  <div className="mt-15 h-screen bg-red-50">
    <h1>Your Cart</h1>
    {cart.map((item) => (
      <div key={item.id}>
        <p>
          {item.name} - ${item.price} x {item.quantity}
        </p>
        <button onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    ))}
  </div>
);
}
