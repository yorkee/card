var expect = chai.expect;

describe('Cards', function(){

    var cardie;
    beforeEach(function(){
      cardie = new CardApi.Cards();
    });

  describe('basic test', function(){
    it('should have cards', function(){
      expect(cardie).to.be.instanceof(Object);
    });

    it('should have cards.getCard', function(){
      expect(cardie.getCard).to.be.instanceof(Function);
    });

    it('should have cards.putCard', function(){
      expect(cardie.getCard).to.be.instanceof(Function);
    });
  });


  describe('getCard should return a card', function(){
    
    it('should return a card when getCard called', function(){
      var singleCard = cardie.getCard();
      expect(singleCard.suit).to.be.a('string');
      expect(singleCard.rank).to.be.a('string');
    });

    it('should only have a deck of 52 cards to get ', function(){
      var singleCard;
      for (var i = 0; i <= 52; i++){
        singleCard = cardie.getCard();
      }
      expect(singleCard).equals('noMore');
    });

    it('should not get the same card again ', function(){
      var cardGot = [];
      
      for (var i = 0; i < 52; i++){
      var singleCard = cardie.getCard();
      for (var j=0; j < cardGot.length; j++){
        expect(singleCard).not.equals(cardGot[j]);
      }
      cardGot.push(singleCard);
    }

    });

  });

});