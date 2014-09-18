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
  ];

})();
