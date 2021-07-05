angular.module("meanRestaurants").controller("RestaurantsController", RestaurantsController);

function RestaurantsController(RestaurantsDataFactory, $scope, AuthFactory) {
    const vm = this;

    RestaurantsDataFactory.getAll().then(function(response) {
        vm.restaurants = response;
    });

    vm.addRestaurant = function () {
        const postData = {
            name: vm.newRestaurantName,
            address: vm.newRestaurantAddress,
        };

        if(vm.restaurantForm.$valid) {
            RestaurantsDataFactory.addOne(postData)
            .then(function(response) {
                console.log("Saved", response)
                $scope.IsShowAddedVisible();
            }).catch(function(error) {
                console.log("Error while saving ", error)
            });
        }
    } 

    vm.searching = function () {
        RestaurantsDataFactory.searchByName(vm.search).then(function (response) {
            if (response != "")
                vm.jobs = response;
        });
    }

    vm.isLoggedIn = function() {
        return AuthFactory.auth;
    }

    $scope.showAdded = false;
    $scope.IsShowAddedVisible = function () {
        if ($scope.showAdded) {
            $scope.showAdded = false;
        } else {
            $scope.showAdded = true;
        }
    }
}