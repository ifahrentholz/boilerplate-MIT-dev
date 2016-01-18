var ura = require("unique-random-array");
var sn = require("./starwars-names.json");
var getRandomItem = ura(sn);
module.exports = {
  all: sn,
  random: random
};

function random(number) {
  if(number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for(var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}