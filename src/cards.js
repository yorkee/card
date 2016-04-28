var CardApi = {};

CardApi.Cards = function() {

  var cardExist = [];
  var rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suit = ["H", "D", "C", "S"];

  //create a sorted deck with # of cards first
  (function initCardInSequence() {
    for (var i = 0; i < 13; i++) {
      for (var j = 0; j < 4; j++) {
        cardExist.push({
          suit: suit[j],
          rank: rank[i]
        });
      }
    }
    CardApi.utils.suffle(cardExist);
  })();

  function getCard() {
    return cardExist.pop() || "noMore";
  }

  function putCard(card) {

  }
  return {
    getCard: getCard,
    putCard: putCard
  };
};


CardApi.utils = {
  isSameCard: function(card1, card2) {
    return (card1.suit === card2.suit) && (card1.rank === card2.rank);
  },

  //This is adopt by  Fisher-Yates Shuffle from Internet
  suffle: function(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      var index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      var temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

};


