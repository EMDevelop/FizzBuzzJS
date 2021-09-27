class FizzBuzz {
  start(num) {
    if (this._isDivisibleByThree(num)) return "Fizz";
    if (this.__isDivisibleByFive(num)) return "Buzz";
  }

  __isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  _isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  _isDivisibleBy(number, divisor) {
    return number % divisor === 0;
  }

  // isDivisibleByFive(number) {
  //   if (number % 5 === 0) return "Buzz";
  // }

  // isDivisibleByBoth(number) {
  //   if (number % 5 === 0 && number % 3 === 0) return "FizzBuzz";
  // }
}
