var starVar = 1
while (starVar <= 1000) {

    if (isPerfect(starVar) == 1) {
        console.log(starVar + " mükemmel sayıdır.")
    }
    starVar++
}

function isPerfect(number) {
    var pint = 1
    var sumDiv = 0
    while (pint <= number) {
        if (number % pint == 0) {
            sumDiv = sumDiv + pint
            pint++
        }
        else {
            pint++
        }
    }
    if (sumDiv == number * 2) {
        return 1
    }
    else {
        return 0
    }
}