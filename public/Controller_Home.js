define(['app'], function (app) {

    // the Content Controller
    // is added into the 'app' module
    // lazily, and only once

    app_cached_providers
      .$controllerProvider
      .register('HomeCtrl', function ($scope) {
        $scope.message = "HomeCtrl";
    });
});
