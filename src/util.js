var utils = {
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

module.exports = utils;
