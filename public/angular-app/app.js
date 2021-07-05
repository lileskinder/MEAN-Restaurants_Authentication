angular.module("meanRestaurants", ["ngRoute", "angular-jwt"]).config(config).run(run);

function config($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");

    $routeProvider.when("/", {
        templateUrl: "angular-app/welcome/welcome.html",
        access: { restricted: false }

    }).when("/restaurants", {
        templateUrl: "angular-app/restaurant-list/restaurant-list.html",
        controller: "RestaurantsController",
        controllerAs: "vm",
        access: { restricted: false }
    }).when("/restaurants/:id", {
        templateUrl: "angular-app/restaurant-display/restaurant.html",
        controller: "RestaurantController",
        controllerAs: "vm",
        access: {restricted: false}
    }).when("/register", {
        templateUrl: "angular-app/register/register.html",
        controller: "RegisterController",
        controllerAs: "vm",
        access: { restricted: false }
    }).when("/profile", {
        templateUrl: "angular-app/profile/profile.html",
        access: { restricted: true }
    }).otherwise({
        redirectTo: "/"
    })
}

function run($rootScope, $location, $window, AuthFactory) {
    $rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {
        if (nextRoute.access !== undefined &&
            nextRoute.access.restricted &&
            !AuthFactory.auth && !$window.sessionStorage.token) {
            event.preventDefault();
            $location.path("/");
        }
    })
}