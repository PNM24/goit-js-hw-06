const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
ingredients.forEach(function (ingredient) {
  const ingredientList = document.createElement("li");
  ingredientList.classList.add("item");
  ingredientList.textContent = ingredient;
  list.append(ingredientList);
  console.log(ingredientList);
});