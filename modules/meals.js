// Class used to create meals objects
class Meals {
    constructor(name, ingredients, instructions, srcLink) {
        this._name = name; // The only property that should be immutable. The other properties may change over time for improved recipes etc. 
        this._ingredients = ingredients;
        this._instructions = instructions;    
    }

    get name(){
        return this._name;
    }

    get ingredients(){
        return this._ingredients;
    }

    get instructions(){
        return this._instructions;
    }

    set ingredients(ing){
        this._ingredients = ing; 
    }

    set instructions(ins){
        this._instructions = ins; 
    }
}

// Array of meal data, each entry represents a meal
const mealsData = [
    {
        name: 'Spaghetti Bolognaise',
        ingredients: ['Beef Mince', 'Pork Mince', 'Spaghetti', 'Onions', 'Carrots', 'Celery', 'Tomatoes', 'Italian herbs'],
        instructions: [
          'Mix both minces to create one mince mix and add to the frying pan',
          'Dice onions and add to the frying pan',
          'Dice carrots, celery and tomatoes and add to the pan',
          'Boil some water and cook spaghetti',
          'Add Italian herbs to the pan and cook until thick',
          'Mix sauce with spaghetti and serve',
        ],
      },
      {
        name: 'Chicken Stir Fry',
        ingredients: ['Chicken Breast', 'Broccoli', 'Bell Peppers', 'Carrots', 'Soy Sauce', 'Garlic', 'Ginger', 'Rice'],
        instructions: [
          'Cut chicken breast into strips and marinate with soy sauce, garlic, and ginger',
          'Cut broccoli, bell peppers, and carrots into small pieces',
          'Stir-fry chicken in a pan until cooked',
          'Add vegetables to the pan and stir-fry until tender',
          'Serve over cooked rice',
        ],
      },
      {
        name: 'Cheeseburger',
        ingredients: ['Beef Patty', 'Cheese Slice', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Ketchup', 'Mustard', 'Burger Bun'],
        instructions: [
          'Grill beef patty to desired doneness',
          'Add cheese slice on top of the patty and let it melt',
          'Slice lettuce, tomato, and onion',
          'Assemble burger with all ingredients on the burger bun',
          'Add ketchup and mustard to taste',
          'Serve with fries',
        ],
      },
      {
        name: 'Caesar Salad',
        ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing'],
        instructions: [
          'Tear romaine lettuce into bite-sized pieces',
          'Add croutons and Parmesan cheese',
          'Toss with Caesar dressing',
          'Serve chilled',
        ],
      },
      {
        name: 'Margherita Pizza',
        ingredients: ['Pizza Dough', 'Tomato Sauce', 'Fresh Mozzarella Cheese', 'Fresh Basil Leaves'],
        instructions: [
          'Roll out pizza dough and spread tomato sauce on it',
          'Add slices of fresh mozzarella cheese on top',
          'Bake in the oven until cheese is melted and crust is golden',
          'Garnish with fresh basil leaves',
        ],
      },
      {
        name: 'Grilled Salmon',
        ingredients: ['Salmon Fillet', 'Olive Oil', 'Lemon', 'Salt', 'Black Pepper'],
        instructions: [
          'Preheat grill or stovetop grill pan',
          'Brush salmon fillet with olive oil and season with salt and black pepper',
          'Grill salmon until cooked through',
          'Squeeze lemon juice over the salmon before serving',
        ],
      },
      {
        name: 'Pasta Alfredo',
        ingredients: ['Fettuccine Pasta', 'Heavy Cream', 'Parmesan Cheese', 'Garlic', 'Butter', 'Salt', 'Black Pepper'],
        instructions: [
          'Cook fettuccine pasta according to package instructions',
          'In a separate pan, melt butter and sauté minced garlic',
          'Add heavy cream and bring to a simmer',
          'Stir in grated Parmesan cheese until the sauce thickens',
          'Toss cooked pasta with the Alfredo sauce',
          'Season with salt and black pepper to taste',
        ],
      },
      {
        name: 'Beef Tacos',
        ingredients: ['Ground Beef', 'Taco Seasoning', 'Taco Shells', 'Lettuce', 'Tomato', 'Cheese', 'Sour Cream'],
        instructions: [
          'In a pan, cook ground beef and add taco seasoning',
          'Warm up taco shells in the oven or on the stovetop',
          'Prepare shredded lettuce, diced tomatoes, and shredded cheese',
          'Assemble tacos with beef, lettuce, tomato, cheese, and sour cream',
        ],
      },
      {
        name: 'Burger and Fries',
        ingredients: ['Ground Beef', 'Hamburger Buns', 'Lettuce', 'Tomato', 'Cheese', 'Potatoes'],
        instructions: [
          'Form ground beef into patties and grill or cook',
          'Toast hamburger buns',
          'Assemble the burgers with lettuce, tomato, cheese, and condiments',
          'Cut potatoes into fries and deep fry until crispy',
          'Serve burgers with fries',
        ],
      },
      {
        name: 'Pasta Carbonara',
        ingredients: ['Spaghetti', 'Pancetta', 'Eggs', 'Parmesan Cheese', 'Black Pepper'],
        instructions: [
          'Cook spaghetti until al dente',
          'Fry pancetta until crispy',
          'Whisk eggs and parmesan cheese together',
          'Drain spaghetti and toss with the egg mixture',
          'Add pancetta and black pepper, and toss again',
          'Serve with additional parmesan cheese on top',
        ],
      }
  ];
  
  // Array to hold the instances
  const mealsArray = [];
  
  // Loop to create instances based on the data
  for (const mealData of mealsData) {
    const mealInstance = new Meals(mealData.name, mealData.ingredients, mealData.instructions);
    mealsArray.push(mealInstance);
  }

console.log(mealsArray);
  
// Export the array to be used in other files
export {mealsArray};
  