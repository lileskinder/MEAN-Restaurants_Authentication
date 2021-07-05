angular.module("meanRestaurants").factory("AuthFactory", AuthFactory);

function AuthFactory() {
    let auth = false;
    return {
        auth: auth
    };
}