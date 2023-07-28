import { getRandomMeals } from './modules/meals.js'; // importing a list of random meal objects

// Pulls five random meals from the mealsArray in meals.js 
const randomMealsArray = getRandomMeals();

let genBtn = document.getElementById('gen-button');
let mealSection = document.getElementById('mealSection');

// creating meal html div element
const meal = document.createElement("div");

// Function to create the HTML content for each meal
const createMealDiv = (meal) => {
    return `
      <div>
        <h2>${meal.name}</h2>
        <p>Ingredients: ${meal.ingredients.join(', ')}</p>
        <p>Instructions: ${meal.instructions.join(', ')}</p>
      </div>
    `;
  };
  
// Loop through randomMealsArray and generate the HTML content for each meal
const mealDivs = randomMealsArray.map((meal) => createMealDiv(meal)); 

// Join the generated HTML elements and convert to a string
let mealDivString = mealDivs.join('');

// Remove the commas from the string
mealDivString = mealDivString.replace(/,/g, '');

// unhides meals section and adds the above html div element 
let showMealSection = function() {
    mealSection.style.display = 'block';
    mealSection.appendChild(meal);
    meal.innerHTML = mealDivString;
}

genBtn.addEventListener('click', showMealSection); 
