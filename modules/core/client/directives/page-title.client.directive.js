(function (app) {
  'use strict';

  angular.module('core')
    .directive('pageTitle', pageTitle);

  pageTitle.$inject = ['$rootScope', '$interpolate', '$state'];

  function pageTitle($rootScope, $interpolate, $state) {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element) {
      $rootScope.$on('$stateChangeSuccess', listener);

      function listener(event, toState) {
        var defaultTitle = app.applicationDefaultTitle,
          separeteBy = ' - ',
          title;

        if (toState.data && toState.data.pageTitle) {
          var stateTitle = $interpolate(toState.data.pageTitle)($state.$current.locals.globals);
          title = defaultTitle + separeteBy + stateTitle;
        } else {
          title = defaultTitle;
        }

        if (element[0].content) {
          element[0].content = title;
        } else {
          element.html(title);
        }
      }
    }
  }
}(ApplicationConfiguration));
