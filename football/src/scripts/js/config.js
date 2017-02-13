angular.module("myApp")
    .config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider
            .otherwise("/index");
        $stateProvider
            .state("index", {
                url: "/index",
                templateUrl: "./src/scripts/tpl/index.html",
                controller: "indexCtrl"
            })
            .state("home", {
                url: "/home",
                templateUrl: "./src/scripts/tpl/home.html",
                controller:"homeCtrl"
            })
            .state("home.first", {
                url: "/first",
                templateUrl: "./src/scripts/tpl/first.html",
            })
            .state("home.found", {
                url: "/found",
                templateUrl: "./src/scripts/tpl/found.html",
            })
            .state("home.my", {
                url: "/my",
                templateUrl: "./src/scripts/tpl/my.html",
            })
            .state("home.return", {
                url: "/return",
                templateUrl: "./src/scripts/tpl/return.html",
            })
            .state("home.first.firs", {
                url: "/firs",
                templateUrl: "./src/scripts/tpl/firs.html",
                controller:"firsCtrl"
            })
            .state("home.first.second", {
                url: "/second",
                templateUrl: "./src/scripts/tpl/second.html",
            })

    })