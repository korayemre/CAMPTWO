let numberOne = prompt("Birinci Sayıyı Giriniz")
let numberTwo = prompt("İkinci Sayıyı Giriniz")
let sumDivOne = isFriend(numberOne)
let sumDivTwo = isFriend(numberTwo)

if (sumDivOne == numberTwo && sumDivTwo == numberOne) {
    console.log(numberOne + " ve " + numberTwo + " sayıları arkadaş sayılardır.")
}
else {
    console.log(numberOne + " ve " + numberTwo + " sayıları arkadaş sayı değillerdir.")
}

function isFriend(number) {
    var startVar = 1
    let sumDiv = 0
    while (startVar < number) {
        if (number % startVar == 0) {
            sumDiv = sumDiv + startVar
            startVar++
        }
        else {
            startVar++
        }

    }
    return sumDiv
}
