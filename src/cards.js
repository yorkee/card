
var util = require('../src/util');

var CardApi = function(numberOfDeck) {
  var numOfDeck = numberOfDeck || 1;
  var cardExist = [];
  var rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suit = ["H", "D", "C", "S"];

  //create a sorted deck 
  function initCardOneDeck() {
    for (var i = 0; i < 13; i++) {
      for (var j = 0; j < 4; j++) {
        cardExist.push({
          suit: suit[j],
          rank: rank[i]
        });
      }
    }
  }

  function getCard() {
    return cardExist.pop() || "noMore";
  }

  function putCard(card, isRandom) {
    var isCardExist = isCardExistInDack(card);

    if (!isCardExist){
      cardExist.push(card);
    }

    if (isRandom){
      util.suffle(cardExist);
    }

    return !isCardExist;
  }

  function isCardExistInDack(card){
    var numOfOccurance = numOfDeck;
    for (var i = 0; i < cardExist.length; i++){
      if (util.isSameCard(card, cardExist[i])){
        numOfOccurance--;
        if (numOfOccurance === 0){
          return true;
        }
      }
    }
    return false;
  }

  (function init(){
    for (var i = 0; i < numOfDeck; i++){
      initCardOneDeck();
    }
    util.suffle(cardExist);
  })();

  return {
    getCard: getCard,
    putCard: putCard
  };
};

module.exports = CardApi;
