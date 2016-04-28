Cards = function() {


  var cardExist = [];

  var rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suit = ["H", "D", "C", "S"];

  (function initCardInSequence() {
    for (var i = 0; i < 13; i++) {
      for (var j = 0; j < 4; j++) {
        cardExist.push({
          suit: suit[j],
          rank: rank[i]
        });
      }
    }
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