var expect = chai.expect;

describe('Cards', function() {


  describe('basic test', function() {
    var cardie;
    beforeEach(function() {
      cardie = new CardApi.Cards();
    });

    it('should have cards', function() {
      expect(cardie).to.be.instanceof(Object);
    });

    it('should have cards.getCard', function() {
      expect(cardie.getCard).to.be.instanceof(Function);
    });

    it('should have cards.putCard', function() {
      expect(cardie.getCard).to.be.instanceof(Function);
    });
  });


  describe('getCard should return a card', function() {

    var cardie;
    beforeEach(function() {
      cardie = new CardApi.Cards();
    });

    it('should return a card when getCard called', function() {
      var singleCard = cardie.getCard();
      expect(singleCard.suit).to.be.a('string');
      expect(singleCard.rank).to.be.a('string');
    });

    it('should only have a deck of 52 cards to get ', function() {
      var singleCard;
      for (var i = 0; i <= 52; i++) {
        singleCard = cardie.getCard();
      }
      expect(singleCard).equals('noMore');
    });

    it('should not get the same card again ', function() {
      var cardGot = [];

      for (var i = 0; i < 52; i++) {
        var singleCard = cardie.getCard();
        for (var j = 0; j < cardGot.length; j++) {
          expect(singleCard).not.equals(cardGot[j]);
        }
        cardGot.push(singleCard);
      }

    });

  });

  describe("cardsEqual", function() {
    var heart2, diamond3, heart3, spadeJ;

    beforeEach(function() {
      heart2 = {
        suit: "H",
        rank: "2"
      };

      diamond3 = {
        suit: "D",
        rank: "3"
      };

      heart3 = {
        suit: "H",
        rank: "3"
      };

      spadeJ = {
        suit: "S",
        rank: "J"
      };

    });

    it('should return true if giving 2 cards are equal', function() {
      expect(CardApi.utils.isSameCard(heart2, heart2)).equals(true);
    });

    it('should return true if giving 2 cards not equal suit', function() {
      expect(CardApi.utils.isSameCard(heart3, diamond3)).equals(false);
    });

    it('should return true if giving 2 cards not equal rank', function() {
      expect(CardApi.utils.isSameCard(heart2, heart3)).equals(false);
    });

    it('should return true if giving 2 cards are totally equal', function() {
      expect(CardApi.utils.isSameCard(spadeJ, heart2)).equals(false);
    });


  });

});