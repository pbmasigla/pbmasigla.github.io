(function() {
  var app = angular.module('puzzleApp', []);

  app.controller('puzzleController', function(){
    this.pattypuzzles = pattysPuzzles;
  });

  var pattysPuzzles = [{
      name: 'Letter Mapper Puzzle',
      app_link: 'letterMapper',
      raw_link: 'https://github.com/pbmasigla/pattyscodingpuzzles.github.io/tree/master/letterMapper',
      problem: 'http://algorithmsquestionsforinterviews.blogspot.com/2013/11/isomorphic-strings.html',
      number: '1',
  },
  {
      name: 'Letter Mapper Puzzle',
      app_link: '',
      raw_link: '',
      number: '2',
  }];

})();
