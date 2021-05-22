function solve(arr){
    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for(let i = 0; i < arr.length; i++){
        let element = arr[i];

        sum += element;
        inverseSum += 1 / element;
        concat += element;
    }

    console.log(sum);
    console.log(inverseSum.toFixed(4));
    console.log(concat);
}

solve([2, 4, 8, 16]);