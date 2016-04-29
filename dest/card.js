(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.cardApi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var util = require('../src/util');

var CardApi = function(numberOfDeck) {
  var numOfDeck = numberOfDeck || 1;
  var cardExist = [];
  var rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suit = ["H", "D", "C", "S"];

  //create a sorted deck 
  function initCardOneDeck() {
    for (var i = 0; i < 13; i++) {
      for (var j = 0; j < 4; j++) {
        cardExist.push({
          suit: suit[j],
          rank: rank[i]
        });
      }
    }
  }

  function getCard() {
    return cardExist.pop() || "noMore";
  }

  function putCard(card, isRandom) {
    var isCardExist = isCardExistInDack(card);

    if (!isCardExist){
      cardExist.push(card);
    }

    if (isRandom){
      util.suffle(cardExist);
    }

    return !isCardExist;
  }

  function isCardExistInDack(card){
    var numOfOccurance = numOfDeck;
    for (var i = 0; i < cardExist.length; i++){
      if (util.isSameCard(card, cardExist[i])){
        numOfOccurance--;
        if (numOfOccurance === 0){
          return true;
        }
      }
    }
    return false;
  }

  (function init(){
    for (var i = 0; i < numOfDeck; i++){
      initCardOneDeck();
    }
    util.suffle(cardExist);
  })();

  return {
    getCard: getCard,
    putCard: putCard
  };
};

module.exports = CardApi;

},{"../src/util":2}],2:[function(require,module,exports){
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

},{}]},{},[1])(1)
});