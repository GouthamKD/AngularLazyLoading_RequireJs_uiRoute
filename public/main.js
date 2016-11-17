
require.config({

    baseUrl: "",

    // alias libraries paths
    paths: {
      // 'angular': '/bower_components/angular/angular.min',
      // 'angular_route': '/bower_components/ui-router/release/angular-ui-router',
        // here we define path to NAMES
        // to make controllers and their lazy-file-names independent

        "HomeCtrl": "Controller_Home",
        "IndexCtrl": "Controller_Index",
        "OtherCtrl": "Controller_Other"
    },

    shim: {
          "angular_route": ["angular"],
    },

    deps: ['app']
});
