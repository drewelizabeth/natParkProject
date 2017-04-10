angular.module('natParkProject').controller('mainCtrl', function($scope, $http) {

  // var baseUrl = 'https://developer.nps.gov/api/v0';

  $scope.getParkData = function() {
    console.log('hello')
    return $http({
    method: 'GET',
    url: 'https://developer.nps.gov/api/v0/parks',
    headers: {
      Authorization: 'D99CF7C2-082F-42B9-9C9B-570CF0AA0EC0'
    }
  })
  .then(function(response) {
    console.log(response);
    $scope.parkInfo = response;
  })
  };



})