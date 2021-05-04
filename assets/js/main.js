// Software must calculate the product price in accordance to what garnish gets selected by the user.

// We can nest different arrays within a main array in order to create a list of ingredients.
// We match each ingredient in position 0 with a price in position 1
var ingredients = [
    ["cheese","1"],
    ["fried-egg","2"],
    ["mustard","0.50"],
    ["tomato","0.75"],
    ["lettuce","0.75"],
    ["ketchup","0.50"]
];
console.log(ingredients);
// Let's create a function that reads the "ingredient-price" association and dynamically inserts the HTML templates into the document.

function renderInputs (list, el){
    // Let's create a WHILE cycle to repeat the process for each array in the main array.
    counter = 0;
    while (counter < list.lenght){
        el.insertAdjacentHTML("beforeend",
        // Below we will invoke the IMG we need using the counter of the list in position 0, as suggested by the arrays.
        // Then we will name the label in the same way, to make it change in accordance to the number of repetitions within the cycle.
        // Same process for the checkbox. Using the attribute "data-" and the counter in position 1 of the array, we can match the ingredient in position 0 with its own price. 
        `
        <div class="form-group">
            <img width="50" src="./assets/img/${list[counter][0] + '.svg'}"> 
            <label for="${list[counter][0]}">${list[counter][0]}</label>
            <input type="checkbox" name="${list[counter][0]}" id="${list[counter][0]}" data-price="${list[counter][1]}">
            <span>add</span>
        </div>
        `
        );
    // Let's increment the counter to restrain the WHILE cycle.
    counter ++
    } 
};

// We need to invoke te function to make it work.
var ingredientsEl = document.getElementById("ingredients");
renderInputs(ingredients, ingredientsEl);
console.log(renderInputs);
