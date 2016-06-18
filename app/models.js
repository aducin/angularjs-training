angular.module("MyApp")

.service("UsersModel", ["$http", "baseURL", function($http, baseURL){
  this.getCollection = function(){
    return $http.get(baseURL + "users?_start=20&_end=30");
  };

  this.getUser = function(id){
    return $http.get(baseURL + "users/" + id);
  };

  this.deleteUser = function(id){
    return $http.delete(baseURL + "users/" + id);
  }
}]);
