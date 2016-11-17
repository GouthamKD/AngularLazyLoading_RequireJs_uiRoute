
// I. the application
var app = angular.module('app', [
  "ui.router"
]);


// II. cached $controllerProvider
var app_cached_providers = {};

app.config(['$controllerProvider',
  function(controllerProvider) {
    app_cached_providers.$controllerProvider = controllerProvider;
  }
]);


// III. inline dependency expression
app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise("/home");

    $stateProvider
      .state("home", {
        url: "/home",
        template: "<div>this is home - not lazily loaded</div>"
      });

    $stateProvider
      .state("other", {
        url: "/other",
        template: "<div>The message from ctrl: {{message}}</div>",
        controller: "OtherCtrl",
        resolve: {
          loadOtherCtrl: ["$q", function($q) {
            var deferred = $q.defer();
            require(["OtherCtrl"], function() { deferred.resolve(); });
            return deferred.promise;
          }],
        },
      });

      $stateProvider
        .state("index", {
          url: "/index",
          template: "<div>The message from ctrl: {{message}}</div>",
          controller: "IndexCtrl",
          resolve: {
            loadOtherCtrl: ["$q", function($q) {
              var deferred = $q.defer();
              require(["IndexCtrl"], function() { deferred.resolve(); });
              return deferred.promise;
            }],
          },
        });

  }
]);



// IV ... build the object with helper functions
//        then assign to state provider

// var loadController = function(controllerName) {
//   return ["$q", function($q) {
//       var deferred = $q.defer();
//       require([controllerName], function() {deferred.resolve(); });
//       return deferred.promise;
//   }];
// }


// app.config(['$stateProvider', '$urlRouterProvider',
//   function($stateProvider, $urlRouterProvider) {
//
//     var index = {
//         url: "/",
//         views: {
//           "topMenu": {
//             template: "<div>The message from ctrl: {{message}}</div>",
//             controller: "TopMenuCtrl",
//           },
//           "": {
//             template: "<div>The message from ctrl: {{message}}</div>",
//             controller: "ContentCtrl",
//           },
//         },
//         resolve : { },
//     };
//
//     index.resolve.loadTopMenuCtrl = loadController("TopMenuCtrl");
//     index.resolve.loadContentCtrl = loadController("ContentCtrl");
//
//     $stateProvider
//       .state("index", index);
//
// }]);
