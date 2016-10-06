(function (app) {
  'use strict';

  angular.module('core')
    .directive('pageDescription', pageDescription);

  pageDescription.$inject = ['$rootScope', '$interpolate', '$state'];

  function pageDescription($rootScope, $interpolate, $state) {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element) {
      $rootScope.$on('$stateChangeSuccess', listener);

      function listener(event, toState) {
        var defaultDescription = app.applicationDefaultDescription;

        if (toState.data && toState.data.pageDescription) {
          var stateDescription = $interpolate(toState.data.pageDescription)($state.$current.locals.globals);
          element[0].content = stateDescription;
        } else {
          element[0].content = defaultDescription;
        }
      }
    }
  }
}(ApplicationConfiguration));
