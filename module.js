var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/cat', {
            controller: 'inputCtrl',
            templateUrl: 'cat.html'
    })
        .when('/dog', {
            controller: 'inputCtrl',
            templateUrl: 'dog.html'
    })
    
        .when('/parakeet', {
            controller: 'inputCtrl',
            templateUrl: 'parakeet.html'
    })
    
    .when('/squirrel', {
            controller: 'inputCtrl',
            templateUrl: 'squirrel.html'
    })
    
    .otherwise({ redirectTo:'/'});
    
    $locationProvider.hashPrefix('');
});
