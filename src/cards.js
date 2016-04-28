Cards = function() {

  var cardCounter=52;


  function getCard() {
    if (cardCounter > 0){
      cardCounter--;
      return{
        suit: "S",
        rank: "2"
      };
    } else {
      return "noMore";
    }
  }

  function putCard(card) {

  }


  return {
    getCard: getCard,
    putCard: putCard
  };
};