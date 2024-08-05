export default function Cart({ cartItems, removeItem, addItem, emptyCart }) {
  function getTotal() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  }

  return (
    <div className=" w-full md:w-1/2 lg:w-1/3 p-3">
      <div className="cart bg-yellow-400 p-4 rounded-lg text-amber-900">
        {cartItems.length == 0 ? (
          <div className="min-h-40 flex items-center justify-center">
            <h4 className="text-center text-2xl font-medium">
              Your cart is empty
            </h4>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center pb-2 border-b border-orange-800 mb-3">
              <h3 className="text-2xl ">Your Order:</h3>
              <button
                onClick={emptyCart}
                className="bg-red-600 text-white rounded-lg p-3"
              >
                Empty cart
              </button>
            </div>
            <ul className="mb-3">
              {cartItems.map((item) => (
                <li
                  className="flex items-center justify-between mb-2"
                  key={item.id}
                >
                  <div>
                    <span className="text-lg">{item.name} | </span>
                    <span>{item.price}€</span>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <span>{item.quantity}x</span>
                    <button
                      className="p-1.5 text-yellow-400 bg-orange-800 rounded-md"
                      onClick={() => addItem(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>

                    <button
                      className="p-1.5 text-yellow-400 bg-orange-800 rounded-md"
                      onClick={() => removeItem(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="text-end border-t pt-1 border-orange-800 text-lg font-medium">
              Total: {getTotal()}€
            </div>
          </>
        )}
      </div>
    </div>
  );
}
