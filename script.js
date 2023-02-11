 //O(n^(3/2))

  console.time('TIME')
  
  function getTriangular() {
      let triangularNumber = 1;
      let index = 2;
      let num = 500;
      function countDivisors(number) {
        let divisors = 0;
        for (let i = 1; i <= Math.sqrt(number); i++) {
          if (number % i == 0) {
            divisors += 2;
          }
        }
        return divisors;
      }
    let divisors = countDivisors(triangularNumber);
    while (divisors <= num) {
      triangularNumber += index;
      index++;
      divisors = countDivisors(triangularNumber);
    }
    return triangularNumber;
  }
  
  console.log(getTriangular());
  console.timeEnd('TIME')