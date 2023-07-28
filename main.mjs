import { getRandomMeals } from './modules/meals.js'; // importing a list of random meal objects

// Pulls five random meals from the mealsArray in meals.js 
const randomMealsArray = getRandomMeals();

let genBtn = document.getElementById('gen-button');
let mealSection = document.getElementById('mealSection');

// creating meal html div element
const meal = document.createElement("div");

// Function to create the HTML content for each meal
const createMealDiv = (meal) => {
    // Generate the list items for ingredients
    const ingredientsListItems = meal.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('');
  
    // Generate the list items for instructions
    const instructionsListItems = meal.instructions.map((instruction) => `<li>${instruction}</li>`).join('');
  
    // Combine the ingredients list and instructions list into the div
    return `
      <div class="meal">
        <h2>${meal.name}</h2>
        <div class="lists">
          <div class="ingredients">
            <p>Ingredients:</p>
            <ul>
              ${ingredientsListItems}
            </ul>
          </div>
          <div class="instructions">
            <p>Instructions:</p>
            <ol>
              ${instructionsListItems}
            </ol>
          </div>
        </div>
      </div>
    `;
  };
  
// Loop through randomMealsArray and generate the HTML content for each meal
const mealDivs = randomMealsArray.map((meal) => createMealDiv(meal)); 

// Join the generated HTML elements and convert to a string
let mealDivString = mealDivs.join('');

// unhides meals section and adds the above html div element 
let showMealSection = function() {
    mealSection.style.display = 'block';
    mealSection.appendChild(meal);
    meal.innerHTML = mealDivString;
}

genBtn.addEventListener('click', showMealSection); 
