angular.module('natParkProject').controller('homeCtrl', function($scope, quoteService) {

console.log(quoteService);
 quoteService.getQuote().then(function(quote) {
  $scope.quote = quote;
 });
 console.log($scope.quote);

//  $scope.quotes = "here is a quote";

})