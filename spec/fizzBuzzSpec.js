describe("FizzBuzz", function () {
  let fizzBuzz;

  beforeEach(function () {
    fizzBuzz = new FizzBuzz();
  });

  describe("number is div by 3", function () {
    it("is Fizz", function () {
      expect(fizzBuzz.start(3)).toBe("Fizz");
    });
  });

  describe("number is div by 3", function () {
    it("is Fizz", function () {
      expect(fizzBuzz.start(6)).toBe("Fizz");
    });
  });

  describe("number is div by 5", function () {
    it("is Buzz", function () {
      expect(fizzBuzz.start(5)).toBe("Buzz");
    });
  });

  describe("number is div by 5", function () {
    it("is Buzz", function () {
      expect(fizzBuzz.start(10)).toBe("Buzz");
    });
  });

  describe("number is div by 5", function () {
    it("is FizzBuzz", function () {
      expect(fizzBuzz.start(30)).toBe("FizzBuzz");
    });
  });

  describe("number is div by 5", function () {
    it("is FizzBuzz", function () {
      expect(fizzBuzz.start(90)).toBe("FizzBuzz");
    });
  });

  describe("Number is not div by 3 or 5", function () {
    it("is FizzBuzz", function () {
      expect(fizzBuzz.start(2)).toBe(2);
    });
  });

  describe("Number is not div by 3 or 5", function () {
    it("is FizzBuzz", function () {
      expect(fizzBuzz.start(19)).toBe(19);
    });
  });
});
//
