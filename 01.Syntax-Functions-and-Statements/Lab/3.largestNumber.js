function solve(arg1, arg2, arg3){
    let largestNum;
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let num3 = Number(arg3);

    if(num1 > num2 && num1 > num3){
        largestNum = num1;
    }
    else if(num2 > num1 && num2 > num3){
        largestNum = num2;
    }
    else if(num3 > num1 && num3 > num2){
        largestNum = num3;
    }

    console.log(`The largest number is ${largestNum}.`)
}

solve('5', '-3', '16');