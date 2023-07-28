// Class used to create meals objects
class Meals {
    constructor(name, ingredients, instructions, srcLink) {
        this._name = name; // The only property that should be immutable. The other properties may change over time for improved recipes etc. 
        this._ingredients = ingredients;
        this._instructions = instructions;
        this._srcLink = srcLink;    
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

    get srcLink(){
        return this._srcLink;
    }

    set ingredients(ing){
        this._ingredients = ing; 
    }

    set instructions(ins){
        this._instructions = ins; 
    }

    set srcLink(link){
        this._srcLink = link; 
    }
}

// Testing 
const spagBol = new Meals(
    'Spaghetti Bolognaise', 
    ['Beef Mince', 'Pork Mince', 'Spaghetti', 'Onions', 'Carrots', 'Celery', 'Tomatoes', 'Italian herbs'],
    ['Mix both minces to create one mince mix and add to the frying pan', 'Dice onions and add to the frying pan', 'Dice carrots, celery and tomatoes and add to the pan', 'Boil some water and cook spaghetti', 'Add Italian herbs to the pan and cook until thick', 'Mix sauce with spaghetti and serve']
    )

console.log(spagBol.name);
console.log(spagBol.ingredients);
console.log(spagBol.instructions);
console.log(spagBol.srcLink);

export {spagBol}; 