describe("OddEvenGenerator", function() {

  var RandomNumGenerator8;
  var RandomNumGenerator3;

  beforeEach(function() {
    RandomNumGenerator8 = function (to, from) {
        return 8;
    };

    RandomNumGenerator3 = function (to, from) {
        return 3;
    };

  });

  it("should produce an odd number", function () {
    var result = getRandomOddOrEven1to10("odd", RandomNumGenerator3);
    expect(result).toEqual(3);
  });

  if("Should produce an even number", function () {
    var result = getRandomOddOrEven1to10("even", RandomNumGenerator8);
    expect(result).toEqual(8)
  });


});
