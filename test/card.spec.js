describe('Cards', function() {
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

  describe('getCard', function() {

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

  describe('suffling', function() {

    it('should have at least half a deck unequal when suffle', function() {
      var firstDeck = new CardApi.Cards();
      var secondDeck = new CardApi.Cards();

      numOfTimesCardEqual = 0;

      for (var i = 0; i < 52; i++) {
        if (CardApi.utils.isSameCard(firstDeck.getCard(), secondDeck.getCard())) {
          numOfTimesCardEqual++;
        }
      }
      expect(numOfTimesCardEqual).to.be.below(31);
    });
  });

  describe('putCard', function() {

    var cardie;
    beforeEach(function() {
      cardie = new CardApi.Cards();
    });

    it('should put a card back to the dack', function() {
      var singleCard = cardie.getCard();
      expect(cardie.putCard(singleCard)).equals(true);
    });

    it('should have the card in the deck if its put back.', function() {
      var singleCard, isCardExistInDeck;

      //pick a random car in the middle of the deck
      for (var i = 0; i < 20; i++) {
        singleCard = cardie.getCard();
      }

      cardie.putCard(singleCard);

      isCardExistInDeck = (function() {
        var card;
        while (card !== "noMore") {
          card = cardie.getCard();
          if (CardApi.utils.isSameCard(singleCard, card)) {
            return true;
          }
        }
        return false;
      })();
      expect(isCardExistInDeck).equals(true);
    });

    it('card should NOT exist if not putting it back.', function() {
      var singleCard, isCardExistInDeck;

      //pick a random car in the middle of the deck
      for (var i = 0; i < 20; i++) {
        singleCard = cardie.getCard();
      }

      isCardExistInDeck = (function() {
        var card;
        while (card !== "noMore") {
          card = cardie.getCard();
          if (CardApi.utils.isSameCard(singleCard, card)) {
            return true;
          }
        }
        return false;
      })();
      expect(isCardExistInDeck).equals(false);
    });

    it('should not able to put card back if its already in the deck', function() {
      expect(cardie.putCard({
        suit: "H",
        rank: "A"
      })).equals(false);
    });

    it('should put card on top of deck by default', function() {
      var singleCard = cardie.getCard();

      cardie.putCard(singleCard);
      expect(CardApi.utils.isSameCard(singleCard,cardie.getCard()))
        .equals(true);

    });

    //TODO:  There is a 1/52 chance this test case will fail.  random might just happen to put the same card on top.
    it('should put card back on randomly if specified', function() {
      var singleCard = cardie.getCard();

      cardie.putCard(singleCard, true);
      expect(CardApi.utils.isSameCard(singleCard,cardie.getCard()))
        .equals(false);
    });

  });

  describe('MultiDeck Support.. lets play with n deck of cards', function() {
    var numOfDeck = 7;

    beforeEach(function() {
      doubleDeck = new CardApi.Cards(numOfDeck);
    });

    it("should have 52 X numberOfDeck of cards", function() {
      var card, cardCount = 0;

      while (card !== "noMore") {
        card = doubleDeck.getCard();
        if (card !== "noMore") {
          cardCount++;
        }
      }
      expect(cardCount).equals(52 * numOfDeck);
    });

    it("should be able to put n same cards", function() {
      var card;

      while (card !== "noMore") {
        card = doubleDeck.getCard();
      }

      for (var i = 0; i < numOfDeck; i++) {
        expect(doubleDeck.putCard(spadeJ)).equals(true);
      }
      expect(doubleDeck.putCard(spadeJ)).equals(false);
    });

    it("should be able to draw n amount of same cards", function() {
      var card;
      var spadeJcount = 0,
        heart2Count = 0,
        diamond3Count = 0,
        heart3Count = 0;

      while (card !== "noMore") {
        card = doubleDeck.getCard();
        if (CardApi.utils.isSameCard(card, spadeJ)) {
          spadeJcount++;
        }
        if (CardApi.utils.isSameCard(card, heart2)) {
          heart2Count++;
        }
        if (CardApi.utils.isSameCard(card, diamond3)) {
          diamond3Count++;
        }
        if (CardApi.utils.isSameCard(card, heart3)) {
          heart3Count++;
        }
      }
      expect(spadeJcount).equals(numOfDeck);
      expect(heart2Count).equals(numOfDeck);
      expect(diamond3Count).equals(numOfDeck);
      expect(heart3Count).equals(numOfDeck);

    });
  });
});