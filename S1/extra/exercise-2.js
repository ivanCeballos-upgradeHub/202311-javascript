//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

var i = 0;

foodSchedule.forEach((food) => {
  if (food["isVegan"] === false) {
    if (i != fruits.length) {
      food["name"] = fruits[i];
      food["isVegan"] = true;
      i++;
      return;
    }
  }
}
)
