function solve(arg1, arg2, arg3){
    let sum = arg1.length + arg2.length + arg3.length;
    let avrg = sum / 3;
    console.log(sum);
    console.log(Math.floor(avrg));
}

solve('chocolate', 'ice cream', 'cake');