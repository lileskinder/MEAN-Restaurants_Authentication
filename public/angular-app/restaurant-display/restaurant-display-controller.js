angular.module("meanRestaurants").controller("RestaurantController", RestaurantController);


function RestaurantController(RestaurantsDataFactory, $routeParams, AuthFactory, $scope) {

    const vm = this;
    const restaurantId = $routeParams.id;

    RestaurantsDataFactory.getOne(restaurantId).then(function (response) {
        vm.restaurant = response;

        console.log("sfsdfsf ", vm.restaurant);
    })

    vm.isLoggedIn = function () {
        return AuthFactory.auth;
    }

    vm.deleteRestaurant = function () {
        RestaurantsDataFactory.deleteOne(restaurantId)
            .then(function (response) {
                console.log("Restaurant Deleted", response);
                $scope.IsShowDeletedVisible();
            }).catch(function (error) {
                console.log("Error Restaurant", error);
            })
    }


    $scope.showDeleted = false;
    $scope.IsShowDeletedVisible = function () {
        if ($scope.showDeleted) {
            $scope.showDeleted = false;
        } else {
            $scope.showDeleted = true;
        }
    }

}