# cards

Simulate playing cards.


## Constructor: 

### Cards()

declaring cards will give you full stack of cards suffled:

```
  var deck = new Cards();
```

will have 52 playing card suffled and ready.


### Cards(numerOfDeck)

passing a number parameter will give you n decks of cards suffled.

```
  var deck = new Cards(4);
```

will have 4 deck of cards suffled.


## Methods:

### getCard() 

  getCard() will return a card from the deck, and return a json object with suit and rank as parameter.  

```
    deck.getCard()
```
  will return:

```
    {
      suit: s,
      rank: r
    }
```
  where s can be "H", "D", "C" or "S"  (stand for Heard, Daimond, Club, Spade)
  r can be "A", "2-10", "J", "Q" or "K"

  when there is no more card, it will return "noMore"

### putCard()

  putCard() will put a card back to the top of the deck.

```
    deck.putCard({
      suit: "H",
      rank: "6"
    });
```

  will put Heart 6 back in the deck.  If the procedure success, it will return true.  If card already exist, it will return false.

  If there is more than one playing deck, it will return false only if the same card occur more than # of same the card could possibily exist in x amount of decks.

