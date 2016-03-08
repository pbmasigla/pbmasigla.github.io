(function() {
  var app = angular.module('puzzleApp', []);

  app.controller('puzzleController', function(){
    this.pattypuzzles = pattysPuzzles;
  });

  var pattysPuzzles = [{
      name: 'Letter Mapper Puzzle',
      app_link: 'letterMapper',
      problem: 'http://algorithmsquestionsforinterviews.blogspot.com/2013/11/isomorphic-strings.html',
      number: '1',
  },
  {
      name: 'Deck of Cards',
      app_link: 'deckOfCards',
      problem: 'http://www.glassdoor.com/Interview/CustomInk-Software-Engineer-Interview-Questions-EI_IE152733.0,9_KO10,27.htm',
      number: '2',
  },
  ];

})();
