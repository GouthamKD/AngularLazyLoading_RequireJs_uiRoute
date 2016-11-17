define(['app'], function (app) {
    // the Default Controller
    // is added into the 'app' module
    // lazily, and only once
    app_cached_providers
      .$controllerProvider
      .register('OtherCtrl', function ($scope) {
        $scope.message = "It's Working from - OtherCtrl";
    });

});
