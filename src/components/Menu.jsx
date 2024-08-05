import { useState } from "react";
import pizzas from "../data";
import Cart from "./Cart";
import PizzaCard from "./PizzaCard";
export default function Menu() {
  /* cart */
  const [cartItems, setCartItems] = useState([]);

  function addItem(item) {
    const found = cartItems.find((i) => i.id === item.id);
    if (found) {
      const newCart = cartItems.map((i) => {
        if (i.id == item.id) {
          i.quantity++;
        }
        return i;
      });
      setCartItems(newCart);
    } else {
      item.quantity = 1;
      setCartItems([...cartItems, item]);
    }
  }

  function removeItem(item) {
    const newCart = cartItems
      .map((i) => {
        if (i.id == item.id) {
          i.quantity--;
        }
        return i;
      })
      .filter((i) => i.quantity > 0);
    setCartItems(newCart);
  }

  function emptyCart() {
    setCartItems([]);
  }

  const pizzaItems = pizzas.map((pizza) => (
    <li className="w-full sm:w-1/2 md:w-full lg:w-1/3 p-4" key={pizza.id}>
      <PizzaCard
        pizzaObj={pizza}
        addItem={addItem}
        removeItem={removeItem}
        cartItems={cartItems}
      />
    </li>
  ));
  return (
    <main>
      <div className="menu">
        <h3 className="text-center  text-4xl mb-8">Have a look at our menu</h3>

        <div className="products-cart flex  flex-wrap">
          <ul className="w-full order-last md:order-none md:w-1/2 lg:w-2/3 flex flex-wrap gap-y-6">
            {pizzaItems}
          </ul>

          <Cart
            cartItems={cartItems}
            emptyCart={emptyCart}
            addItem={addItem}
            removeItem={removeItem}
          />
        </div>
      </div>
    </main>
  );
}
