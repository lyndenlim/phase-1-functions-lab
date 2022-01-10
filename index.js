// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance >= 42) {
        return (distance - 42);
    } else {
        return (distance - 26);
    };
};

function distanceFromHqInFeet(distance){
    return Math.abs(distance - 42) * 264;
};

function distanceTravelledInFeet(x,y){
    if (x > y){
        return (((x - 42) * 264) - ((y - 42) * 264));
    } else {
        return ((Math.abs(y - 42) * 264) - (Math.abs(x - 42) * 264));
    };
};

function calculatesFarePrice(x,y){
    if (Math.abs((x - y)) <= 1){
        return 0;
     } else if (Math.abs(x - y) > 1 && Math.abs(x - y) < 7) {
        return ((((x - y) * 264) - 400) * 0.02)
     } else if (Math.abs(x - y) > 7 && Math.abs(x - y) < 9) {
         return 25;
     } else {
         return "cannot travel that far";
     };
};