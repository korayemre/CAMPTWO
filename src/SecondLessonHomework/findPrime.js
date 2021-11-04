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
  
  
  function findPrime(...numbers) {
    var i1
    var result
    for (let i1 = 0; i1 < numbers.length; i1++) {
      result = primeCalculate(numbers[i1])
  
      if (result == 0) {
        console.log(numbers[i1] + ' sayısı asal değildir.')
      }
      else {
        console.log(numbers[i1] + ' sayısı asaldır.')
  
      }
  
  
  
    }
  }
  
  findPrime(2, 5, 8, 21, 13 , 33 , 99)
  findPrime(3, 5)
  
  
  
  
  
  