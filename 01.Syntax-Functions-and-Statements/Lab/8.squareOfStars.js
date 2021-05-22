function solve(num){
    let result = '';

    if(typeof(num) == 'number'){
        for(let i = 1; i <= num; i++){
            result += '* ';
        }
    
        for(let i = 1; i <= num; i++){
            console.log(result.trimEnd());
        }
    }
    else{
        for(let i = 1; i <= 5; i++){
            result += '* ';
        }
    
        for(let i = 1; i <= 5; i++){
            console.log(result.trimEnd());
        }
    }
}

solve();