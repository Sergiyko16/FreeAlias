(function () {
    "use strict";

    angular.module("myapp", ["ionic", "myapp.controllers", "myapp.services"])
        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("mainmenu", {
                    url: "/mainmenu",
                    templateUrl: "app/templates/view-mainmenu.html",
                    controller: "appMainMenu"
                });

            //.state("app.mainmenu", {
            //    url: "/mainmenu",
            //    templateUrl: "app/templates/view-mainmenu.html",
            //    controller: "appMainMenu"
            //})
            //.state("app", {
            //    url: "/app",
            //    abstract: true,
            //    templateUrl: "app/templates/view-menu.html",
            //    controller: "appCtrl"
            //})
            //.state("app.home", {
            //    url: "/home",
            //    templateUrl: "app/templates/view-home.html",
            //    controller: "homeCtrl"
            //});

            $urlRouterProvider.otherwise("/mainmenu");
        });
})();