function solve(typeOfFruit, weightInGrams, priceInKg){
    let weightInKg = weightInGrams / 1000
    let moneyNeeded = weightInKg * priceInKg;


    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`)
}

solve('orange', 2500, 1.80);