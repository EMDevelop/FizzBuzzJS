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

  // describe("div by 5", function () {
  //   it("is Buzz", function () {
  //     expect(fizzBuzz.isDivisibleByFive(5)).toBe("Buzz");
  //   });
  // });

  // describe("div by 3 and 5", function () {
  //   it("is FizzBuzz", function () {
  //     expect(fizzBuzz.isDivisibleByBoth(15)).toBe("FizzBuzz");
  //   });
  // });

  // describe("any other number", function(){
  //   it("is input number", function () {
  //     expect(fizzBuzz.)
  //   })
  // })
});
//
