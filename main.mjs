import { spagBol } from './modules/meals.js'; 

let genBtn = document.getElementById('gen-button');
let mealSection = document.getElementById('mealSection');
const meal = document.createElement("p");
const content = `<h2>${spagBol.name}</h2>
                <p>Ingredients: ${spagBol.ingredients}</p>
                <p>Instructions: ${spagBol.instructions}</p>
                <p>Link: ${spagBol.srcLink}</p>`

let showSections = function() {
    mealSection.style.display = 'block';
    mealSection.appendChild(meal);
    meal.innerHTML = content;
}

genBtn.addEventListener('click', showSections); 
