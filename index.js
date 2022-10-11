const scuberHQ = 42;
function distanceFromHqInBlocks(a) {
    return Math.abs(a-scuberHQ);
}

function distanceFromHqInFeet(a) {
    return distanceFromHqInBlocks(a)*264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination)*264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let price = 0;
    if (distance > 2500) {
        return `cannot travel that far`;
    }
    if (distance > 2000) {
        price +=  25;
    }
    else if (distance > 400) {
        price += .02 * (distance - 400);
    }
    return price;
    
}