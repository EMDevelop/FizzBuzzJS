class FizzBuzz {
  start(num) {
    if (this._isDivisibleByBoth(num)) return "FizzBuzz";
    if (this._isDivisibleByThree(num)) return "Fizz";
    if (this.__isDivisibleByFive(num)) return "Buzz";
    return num;
  }

  _isDivisibleByBoth(number) {
    return this.__isDivisibleByFive(number) && this._isDivisibleByThree(number);
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
}
