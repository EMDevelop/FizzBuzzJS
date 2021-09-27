describe("FizzBuzz", function () {
  let fizzBuzz;

  describe("number is div by 3", function () {
    it("div 3 ?", function () {
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
});
