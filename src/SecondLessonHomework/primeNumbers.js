var starVar = 2
while (starVar <= 1000) {
   
    if (primeCalculate(starVar) == 1) {
        console.log(starVar + " asal sayıdır.")
    }
   
    starVar++
}
function primeCalculate(varNumber) {
    var ısPrime = 1
    var startVar = 2
    while (startVar <= varNumber / 2) {
      if (varNumber % startVar == 0) {
        ısPrime = 0
        break
      }
      else {
        startVar++
      }
    }
    if (ısPrime == 0) {
      return 0
    }
    else {
      return 1
    }
  }