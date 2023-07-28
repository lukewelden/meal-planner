import { getRandomMeals } from './modules/meals.js'; // importing a list of random meal objects

let genBtn = document.getElementById('gen-button');
let mealSection = document.getElementById('mealSection');

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
  
// Function to display the random meals
const showRandomMeals = () => {
    // Pulls five random meals from the mealsArray in meals.js 
    const randomMealsArray = getRandomMeals();
  
    // Loop through randomMealsArray and generate the HTML content for each meal
    const mealDivs = randomMealsArray.map((meal) => createMealDiv(meal)); 
  
    // Join the generated HTML elements and convert to a string
    const mealDivString = mealDivs.join('');
  
    // unhides meals section and adds the above html div element 
    mealSection.style.display = 'block';
    mealSection.innerHTML = mealDivString;
  };
  
// Initial call to display random meals on page load
//showRandomMeals();
  
// Add click event listener to the button
genBtn.addEventListener('click', showRandomMeals);