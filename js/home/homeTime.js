angular.module('natParkProject')
  .directive('timeFooter', function() {
    var time  = moment().format('llll');
    return {
      restrict: 'E',
      template: '<p>{{time}} is the perfect time for a hike!</p>',
      // scope: '&',
      link: function(scope, element, attrs) {
        scope.time = moment().format('MMMM Do YYYY, h:mm:ss a');
          setInterval(function() {
            scope.$apply(function() {
              scope.time = moment().format('MMMM Do YYYY, h:mm:ss a');
          }, 1000);
          })
       
      }
    }


  })