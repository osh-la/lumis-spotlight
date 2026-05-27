import { useCart } from "../context/cartProvider";

const CartModal = ({ onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart(); 

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-red-50 shadow-lg z-50 p-6 overflow-y-auto flex flex-col">
      <button className="mb-4 text-red-500 font-bold self-start" onClick={onClose}>
        Close
      </button>
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <div className="flex-1">
            {cart.map((item, i) => (
              <div key={i} className="mb-3 border-b pb-2 flex items-center gap-2">
                <img className="w-20 h-20 object-cover" src={item.image} alt="" />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-700">${item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>


            <button
              onClick={clearCart}
              className="w-1/2 text-red-600 border border-red-500 py-2  hover:bg-red-100 transition"
            >
              Clear Cart
            </button>
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>


            <button className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
