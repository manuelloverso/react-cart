export default function PizzaCard({
  pizzaObj,
  addItem,
  cartItems,
  removeItem,
}) {
  /* const [quantity, setQuantity] = useState(0); */
  const cartItem = cartItems.find((i) => i.id === pizzaObj.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const ingredients = pizzaObj.ingredients.map((ingredient) => (
    <li key={ingredient} className="p-1.5 text-white bg-orange-800 rounded-md">
      {ingredient}
    </li>
  ));

  /* function increseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  } */
  return (
    <div className="pizza-card bg-yellow-400 h-full p-4 rounded-lg text-amber-900 flex justify-between flex-col">
      <div>
        <img
          className="w-full object-cover rounded-md mb-4"
          style={{ aspectRatio: "16/11" }}
          src={pizzaObj.src}
          alt={pizzaObj.name}
        />
        <h4 className="text-center text-xl font-medium mb-3">
          {pizzaObj.name}
        </h4>
        <ul className="flex flex-wrap gap-x-2 gap-y-1 mb-3">{ingredients}</ul>
      </div>
      <div>
        <span className="font-medium inline-block mb-3">
          Price: {pizzaObj.price}€
        </span>
        <div className="actions flex gap-x-2 items-center">
          <button
            className="p-1.5 text-yellow-400 bg-orange-800 rounded-md"
            onClick={() => addItem(pizzaObj)}
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
          {quantity > 0 && (
            <>
              <span>{quantity}</span>

              <button
                className="p-1.5 text-yellow-400 bg-orange-800 rounded-md"
                onClick={() => removeItem(pizzaObj)}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
