describe("Cookie Detector", function () {

  var itemsWithoutCookies;
  var itemsWithCookies;

  beforeEach(function () {
    itemsWithoutCookies = ['apples', 'pears', 'bananas'];
    itemsWithCookies = ['bread', 'milk', 'Cookies'];
  });

  it("Should be able to detect no cookies", function () {
    var result = DetectCookie(itemsWithoutCookies);
    expect(result).not.toBe(true);
  });


  it("Shoud be able to detect cookies", function () {
    var result = DetectCookie(itemsWithCookies);
    expect(result).toBe(true);
  })


})
