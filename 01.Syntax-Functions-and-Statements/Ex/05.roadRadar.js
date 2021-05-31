function solve(currSpeed, area) {
    let isWithinTheLimit = true; //check
    let speedLimit = 0;
    let speed = Number(currSpeed);

    switch(area) {
        case 'motorway':
            speedLimit = 130;
            if (speed > speedLimit) {
                isWithinTheLimit = false;
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if (speed > speedLimit) {
                isWithinTheLimit = false;               
            }
            break;
        case 'city':
            speedLimit = 50;
            if (speed > speedLimit) {
                isWithinTheLimit = false;
            }
            break;
        case 'residential':
            speedLimit = 20;
            if (speed > speedLimit) {
                isWithinTheLimit = false;
            }
            break;
    }

    let difference = speed - speedLimit;
    if (isWithinTheLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
    else {
        if (difference <= 20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`);
        }
        else if (difference <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
        }
        else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
        }
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');