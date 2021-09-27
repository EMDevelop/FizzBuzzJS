describe("FizzBuzz", function () {
  let fizzBuzz;

  beforeEach(function () {
    fizzBuzz = new FizzBuzz();
  });

  describe("number is div by 3", function () {
    it("is Fizz", function () {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe("Fizz");
    });
  });

  describe("div by 5", function () {
    it("is Buzz", function () {
      expect(fizzBuzz.isDivisibleByFive(5)).toBe("Buzz");
    });
  });

  describe("div by 3 and 5", function () {
    it("is FizzBuzz", function () {
      expect(fizzBuzz.isDivisibleByBoth(15)).toBe("FizzBuzz");
    });
  });
});
//
