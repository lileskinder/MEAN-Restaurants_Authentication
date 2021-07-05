angular.module("meanRestaurants").factory("RestaurantsDataFactory", RestaurantsDataFactory);

function RestaurantsDataFactory($http) {
    return {
        getAll: getAllRestaurants,
        getOne: getOneRestaurants,
        addOne: addOneRestaurant,
        deleteOne: deleteOneRestaurant,
        searchByName: searchRestaurantByName
    }

    function getAllRestaurants() {
        return $http.get("/api/restaurants")
            .then(complete)
            .catch(failed);
    }
    function getOneRestaurants(id) {
        return $http.get("/api/restaurants/" + id)
            .then(complete)
            .catch(failed)
    }

    function addOneRestaurant(restaurant) {
        return $http.post("/api/restaurants/", restaurant)
            .then(complete)
            .catch(failed)
    }

    function deleteOneRestaurant(id) {
        return $http.delete("/api/restaurants/" + id)
        .then(complete)
        .catch(failed)
    }

    function searchRestaurantByName(param) {
        return $http.get("/api/restaurants/search/"+param)
        .then(complete)
        .catch(failed)
    }

    function complete(response) {
        return response.data;
    }

    function failed(error) {
        return error.status.statusText;
    }
}