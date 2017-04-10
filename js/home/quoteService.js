angular.module('natParkProject').service('quoteService', function($http) {
  
  
  this.getQuote = function() {
    return $http({
      method: 'GET',
      url: 'https://naturequote.herokuapp.com',
    }).then(function(response) {
      // console.log(response.data.text);
      // console.log(response.data.text.split(''));
      var arr = response.data.text.split('')
      return (arr.splice(0, arr.indexOf('<')).join(''));

      // if (response.data.success == true) {
      //         return response.data.text;
      // } else {
      //   return "did not work";
      // }
    });
  };
});