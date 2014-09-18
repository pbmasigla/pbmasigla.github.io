//DECK OF CARDS

var deck;

(function(){

	var deckApp = angular.module('deckApp', []);

	deckApp.controller('deckController', function(){

		this.deck = [];

		//CREATE INITIAL DECK BASED ON SIZE CHOSEN
		this.createDeck = function(size){

			if(size <= 52){
				this.deck = [];
				var suits = ['Hearts', 'Trees', 'Stars', 'Towers'];

				for( var i = 0; i < suits.length; i++ ){
					for( var g = 1; g <= 13; g++ ){

						var card = {};
						var value = "";
						var suit = suits[i];

						switch(g){
							case 1:
								value = "Ace";
								break;
							case 11:
								value = "Jack";
								break;
							case 12:
								value = "Queen";
								break;
							case 13:
								value = "King";
								break;
							default:
								value = g;
						}

						card['value'] = value;
						card['suit'] = suit;
						this.deck.push(card);
					}
				}

				this.deck = sortDeck(this.deck, size);
				angular.element($("#create_deck_modal")).modal('hide');
			}else{
				alert('Amount of cards must be less than or equal to 52!');
			}
		};

		//WHEN SHUFFLE IS CLICKED, CALL SORT FUNCTION
		this.shuffle = function(){

			this.deck = sortDeck(this.deck, this.deck.length);

		};

		//RANDOMIZES CARDS
		function sortDeck(unsortedDeck, size){

			var sortedCards = [];
			var newDeck = [];

			for(var i = 0; i < size; i++){

				var addedIndex = false;

				while(addedIndex == false){

					var indexToAdd =  Math.floor(Math.random() * unsortedDeck.length);

					if($.inArray(indexToAdd, sortedCards) == -1){
						sortedCards.push(indexToAdd);

						//ADD TO NEW DECK
						var newCard = {};
						var value = unsortedDeck[indexToAdd].value;
						var suit = unsortedDeck[indexToAdd].suit;

						newCard['value'] = value;
						newCard['suit'] = suit;
						newDeck.push(newCard);

						addedIndex = true;
					}
				}
			}
			return newDeck;
		}

	});

})();

// var deck = [];

// function createDeck(size){
// 	var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

// 	for( var i = 0; i < suits.length; i++ ){
// 		for( var g = 1; g <= 13; g++ ){

// 			var card = {};
// 			var value = "";
// 			var suit = suits[i];

// 			switch(g){
// 				case 1:
// 					value = "Ace";
// 					break;
// 				case 11:
// 					value = "Jack";
// 					break;
// 				case 12:
// 					value = "Queen";
// 					break;
// 				case 13:
// 					value = "King";
// 					break;
// 				default:
// 					value = g;
// 			}

// 			card['value'] = value;
// 			card['suit'] = suit;
// 			deck.push(card);
// 		}
// 	}

// 	deck = sortDeck(deck, size);
// }

// function sortDeck(unsortedDeck, size){

// 	var sortedCards = [];
// 	var newDeck = [];

// 	for(var i = 0; i < size; i++){

// 		var addedIndex = false;

// 		while(addedIndex == false){

// 			var indexToAdd =  Math.floor(Math.random() * unsortedDeck.length);

// 			if($.inArray(indexToAdd, sortedCards) == -1){
// 				sortedCards.push(indexToAdd);

// 				//ADD TO NEW DECK
// 				// var card = keys[indexToAdd];
// 				var newCard = {};
// 				var value = unsortedDeck[indexToAdd].value;
// 				var suit = unsortedDeck[indexToAdd].suit;

// 				newCard['value'] = value;
// 				newCard['suit'] = suit;
// 				newDeck.push(newCard);

// 				addedIndex = true;
// 			}
// 		}
// 	}
// 	return newDeck;
// }

// });