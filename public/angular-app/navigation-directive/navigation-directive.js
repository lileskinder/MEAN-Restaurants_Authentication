angular.module("meanRestaurants").directive("resNavigation", ResNavigation);

function ResNavigation() {
    return {
        restrict: "E",
        templateUrl: "angular-app/navigation-directive/navigation-directive.html"
    }
}