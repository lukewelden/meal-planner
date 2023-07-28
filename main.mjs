import { mealsArray } from './modules/meals.js'; // importing a list of meal objects

let genBtn = document.getElementById('gen-button');
let mealSection = document.getElementById('mealSection');

// creating meal html div element
const meal = document.createElement("div");
const content = `<h2>${mealsArray[1].name}</h2>
                <p>Ingredients: ${mealsArray[1].ingredients}</p>
                <p>Instructions: ${mealsArray[1].instructions}</p>`

// unhides meals section and adds the above html div element 
let showSections = function() {
    mealSection.style.display = 'block';
    mealSection.appendChild(meal);
    meal.innerHTML = content;
}


genBtn.addEventListener('click', showSections); 
