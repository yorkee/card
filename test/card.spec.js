var expect = chai.expect;

describe('test', function(){
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