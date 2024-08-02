import pizzas from "../data";
import PizzaCard from "./PizzaCard";
export default function Menu() {
  const pizzaItems = pizzas.map((pizza) => (
    <li key={pizza.id}>
      <PizzaCard pizzaObj={pizza} />
    </li>
  ));
  return (
    <div className="menu">
      <h3>Menu</h3>

      <ul>{pizzaItems}</ul>
    </div>
  );
}
