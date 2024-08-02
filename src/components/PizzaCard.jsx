export default function PizzaCard({ pizzaObj }) {
  const ingredients = pizzaObj.ingredients.map((ingredient) => (
    <li key={ingredient} className="ingredient">
      {ingredient}
    </li>
  ));
  return (
    <div className="pizza-card">
      <h4>{pizzaObj.name}</h4>
      <ul>{ingredients}</ul>
      <span>Price: {pizzaObj.price}€</span>
    </div>
  );
}
