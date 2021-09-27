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

  // describe("div by 5", function () {
  //   it("is Buzz", function () {});
  // });
});
