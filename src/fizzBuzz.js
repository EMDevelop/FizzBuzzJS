class FizzBuzz {
  isDivisibleByThree(number) {
    if (number % 3 === 0) return "Fizz";
  }
  isDivisibleByFive(number) {
    if (number % 5 === 0) return "Buzz";
  }
  isDivisibleByBoth(number) {
    if (number % 5 === 0 && number % 3 === 0) return "FizzBuzz";
  }
}
