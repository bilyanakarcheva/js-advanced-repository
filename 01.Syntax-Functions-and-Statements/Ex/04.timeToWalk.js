function solve(numOfSteps, stride, speedKmP){
    let speed = speedKmP * 5 / 18;
    let distance = stride * numOfSteps;
    let time = distance / speed;
    let numOfBreaks = Math.trunc(distance / 500);

    time += numOfBreaks * 60;

    let hours = Math.trunc(time / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.trunc((time % 3600) / 60).toFixed(0).padStart(2, '0');
    let seconds = (time % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`)
    console.log(typeof seconds);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);