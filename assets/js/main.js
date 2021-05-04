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
    while (counter < list.length){
        el.insertAdjacentHTML("beforeend",
        // Below we will invoke the IMG we need using the counter of the list in position 0, as suggested by the arrays.
        // Then we will name the label in the same way, to make it change in accordance to the number of repetitions within the cycle.
        // Same process for the checkbox. Using the attribute "data-" and the counter in position 1 of the array, we can match the ingredient in position 0 with its own price. 
        `
        <div class="form-group col-6 my-3 vertical-align-middle">
            <img class="mr-2" width="50" src="./assets/img/${list[counter][0] + '.svg'}"> 
            <label for="${list[counter][0]}">${list[counter][0]}</label>
            <input type="checkbox" name="${list[counter][0]}" id="${list[counter][0]}" data-price="${list[counter][1]}" class="mx-2">
            <span class="colour_pink">add</span>
        </div>
        `
        );
    // Let's increment the counter to restrain the WHILE cycle.
    counter ++
    } 
};

// We need to invoke the function to make it work.
var ingredientsEl = document.getElementById("ingredients");
renderInputs(ingredients, ingredientsEl);
console.log(renderInputs);

// We need to verify if the customer can use his voucher code to get a discount.
// First of all we need an array to contain all coupons codes available to get a discount and we can actually use nested arrays.
var coupons = ["ABCD1234","EFGH5678","IJKL9123","MNOP4567"];
console.log(coupons);

// Let's add EventListener to the HTML button identified as "calculate".
document.getElementById("calculate").addEventListener("click", function(){
    // We need a standard price to start from.
    var burger_price = 5.90
    console.log(burger_price);
    
    // We need to increment the price in accordance to the ingredient that get selected.
    // So we need to select all checkboxes through their attribute.
    var checks = document.querySelectorAll("input[type = 'checkbox']");
    console.log(checks);
    //  We also need to sum all ingredients prices.
    var sumIngredients = null;
    for(var i = 0; i < checks.length; i++) {
        var element = checks[i];
        if(element.checked) {
            sumIngredients += Number(element.getAttribute('data-price'))
        }
    }
    console.log(sumIngredients);
    // We need to sum the burger standard price to the sum of all ingredients selected prices.
    var finalPrice = burger_price + sumIngredients;

    // We also need a Var to link the voucher Input.Value to JS and verify if the discount can get applied.
        var code = document.getElementById("voucher").value
        if (coupons.includes(code)){
            finalPrice -=(finalPrice * 0.15)
        }   
    
    console.log(finalPrice);
    document.getElementById("burgerPrice").innerHTML = finalPrice.toFixed(2) + " £"
});

