var expect = require("chai").expect;
var sw = require("./index");


describe("mplay", function() {
  describe("all", function() {
    it("should be an array of strings", function() {
      expect(sw.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === "string";
        });
      }
    });

    it("should contain `Luk Skywalker`", function() {
      expect(sw.all).to.contain("Luke Skywalker");
    })
  });

  describe("random", function() {
    it("should return a random item of sw.all", function() {
      var randomItem = sw.random();
      expect(sw.all).to.include(randomItem)
    });

    it("should return an array of random items if passed a number", function() {
      var randomItems = sw.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(sw.all).to.include(item);
      });
    });
  })
});