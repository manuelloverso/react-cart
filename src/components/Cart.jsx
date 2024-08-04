export default function Cart({ cartItems, removeItem, addItem, emptyCart }) {
  console.log(cartItems);
  return (
    <div className="grow p-3">
      <div className="cart bg-yellow-400 p-4 rounded-lg text-amber-900">
        {cartItems.length == 0 ? (
          <h4 className="text-center">Your cart is empty</h4>
        ) : (
          <>
            <h3 className="text-center text-2xl pb-1 border-b border-orange-800 mb-3">
              Your Order:
            </h3>
            <div className="text-end">
              <button
                onClick={emptyCart}
                className="bg-red-600 text-white rounded-lg p-3"
              >
                Empty cart
              </button>
            </div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <span>{item.quantity}x | </span>
                  <span className="text-lg">{item.name}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
