function solve(num){
    let numString = String(num);
    let sum = 0;
    let areEqual = true;
    for (let index = 0; index < numString.length; index++) {
        sum += Number(numString[index]);
    }

    for (let index = 1; index < numString.length; index++) {
        let currNumber = Number(numString[index]);
        let prevNumber = Number(numString[index - 1]);

        if ( currNumber !== prevNumber) {
            areEqual = false;
        }
    }

    console.log(areEqual);
    console.log(sum);
}

solve();