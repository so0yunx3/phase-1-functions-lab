function distanceFromHqInBlocks(someValue){
    if (someValue<42){
        return(42-someValue);
    }
    else {
        return (someValue-42);
    }
}
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start, destination){
    if (destination>start){
        return ((destination-start)*264);
    }
    else
        return ((start-destination)*264);
}
function calculatesFarePrice(start, destination){
let distance = distanceTravelledInFeet (start, destination);
if (distance<=400){
    return 0;
}
if (distance>=400 && distance<=2000){
    return (distance-400)* 0.02;
}

else if (distance>= 2000 && distance<=2500){
    return 25;
}
else if (distance > 2500){
    return "cannot travel that far";
}
}