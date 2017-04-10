angular.module('natParkProject')
  .controller('parksCtrl', function($scope, parkData, stateAbbs){

    $scope.test = 'hello there';

    $scope.parks = parkData.data;

    $scope.translateStateLookup = function(stateSearchText) {
      if (stateSearchText && stateSearchText.includes('New')) return 'nm';

      return stateSearchText;
    };

    $scope.stateSearch = function(text) {
      console.log(text, stateAbbs.searchState(text));
      return stateAbbs.searchState(text);
    }


    // console.log(stateAbbs.);
})