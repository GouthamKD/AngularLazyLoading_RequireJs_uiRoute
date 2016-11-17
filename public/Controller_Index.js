define(['app'], function (app) {

    // the TopMenu Controller
    // is added into the 'app' module
    // lazily, and only once

    app_cached_providers
      .$controllerProvider
      .register('IndexCtrl', ['$scope', function ($scope) {
        $scope.message = "It's Working - from IndexCtrl";
    }]);
});
