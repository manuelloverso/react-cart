import pizzas from "../data";
import PizzaCard from "./PizzaCard";
export default function Menu() {
  const pizzaItems = pizzas.map((pizza) => (
    <li className="w-1/3 p-4 " key={pizza.id}>
      <PizzaCard pizzaObj={pizza} />
    </li>
  ));
  return (
    <div className="menu">
      <h3 className="text-center  text-4xl mb-8">Have a look to our menu</h3>

      <ul className="flex flex-wrap gap-y-6">{pizzaItems}</ul>
    </div>
  );
}
