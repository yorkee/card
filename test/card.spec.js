var expect = chai.expect;

describe('Cards', function(){
  describe('basic test', function(){
    var cardie = new Cards();
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
    var cardie = new Cards();
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



  });

});