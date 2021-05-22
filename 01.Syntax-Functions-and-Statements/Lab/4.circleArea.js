function solve(arg){

    let typeOfArgument = typeof(arg);
    let circleArea;

    if(typeOfArgument === 'number'){
        
        let radius = Number(arg);
        circleArea = Math.PI * Math.pow(radius, 2);  
        console.log(circleArea.toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArgument}.`)
    }
}

solve(5);
solve('name');

